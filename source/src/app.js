/* Fermata app */
(() => {
  const { render: fig, wireBreath, md, esc } = FIG;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // ---------------- subjects & content ----------------
  const SUBJECTS = [
    { id: 'finance', name: 'Money & Finance', letter: 'F', color: '#1F9D55', blurb: 'How money works, from your budget to how companies create value.' },
    { id: 'accounting', name: 'Accounting', letter: 'A', color: '#2563C9', blurb: 'The language of business, from the equation to reading a 10-K.' },
    { id: 'investing', name: 'Investing', letter: 'I', color: '#C98700', blurb: 'Risk, return, portfolios, and how the economy moves markets.' },
    { id: 'stocks', name: 'Stock Investing', letter: 'S', color: '#D6342C', blurb: 'What a share is, how to read a company, and how to value it.' },
    { id: 'ai', name: 'Using AI Well', letter: 'Ai', color: '#7A4FD8', blurb: 'Prompting, checking, and building real workflows with AI.' },
    { id: 'self', name: 'Self Improvement', letter: 'U', color: '#E36A0E', blurb: 'Habits, focus, decisions, and leading people.' },
    { id: 'inner', name: 'Inner Growth', letter: 'G', color: '#0E9C99', blurb: 'Presence, emotions, values, and a calmer mind.' },
  ];
  const SUB = Object.fromEntries(SUBJECTS.map(s => [s.id, s]));
  const LEVELS = { 1: { code: '101', name: 'Foundations' }, 2: { code: '201', name: 'Builder' }, 3: { code: '301', name: 'Advanced' } };
  const L = window.LEARN;
  const BY_ID = {};
  const BY_SUB = {};
  L.lessons.forEach(l => { BY_ID[l.id] = l; (BY_SUB[l.subject] = BY_SUB[l.subject] || []).push(l); });
  Object.values(BY_SUB).forEach(a => a.sort((x, y) => x.order - y.order));
  const lessonsOf = s => BY_SUB[s] || [];

  // ---------------- state ----------------
  const KEY = 'fermata.v1';
  const defaults = () => ({ v: 1, name: '', onboarded: false, subjects: SUBJECTS.map(s => s.id), mode: 'rotate', focus: 'finance', fs: 19, theme: 'auto', rate: 1, done: {}, known: {}, pos: {}, exams: {}, placement: {}, review: {}, log: {}, today: null });
  let S;
  try { S = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { S = defaults(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } };

  const dkey = (d = new Date()) => d.toLocaleDateString('en-CA');
  const addDays = (n, d = new Date()) => { const x = new Date(d); x.setDate(x.getDate() + n); return dkey(x); };
  const dayNum = () => Math.floor(new Date(dkey() + 'T12:00:00').getTime() / 864e5);
  const hash = s => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const shuffle = (arr, seed) => { const a = arr.slice(); let s = seed || 1; for (let i = a.length - 1; i > 0; i--) { s = (Math.imul(s, 1103515245) + 12345) >>> 0; const j = s % (i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  function logActivity(minutes = 0, lessons = 0, reviews = 0) {
    const k = dkey(); const e = S.log[k] || { min: 0, lessons: 0, reviews: 0 };
    e.min = Math.round((e.min + minutes) * 10) / 10; e.lessons += lessons; e.reviews += reviews; S.log[k] = e; save();
  }
  function streak() {
    let n = 0, d = new Date();
    if (!S.log[dkey(d)]) d.setDate(d.getDate() - 1);
    while (S.log[dkey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  const weekMinutes = () => { let m = 0; for (let i = 0; i < 7; i++) m += (S.log[addDays(-i)] || {}).min || 0; return Math.round(m); };
  const isDone = id => !!S.done[id];
  const isKnown = id => !!S.known[id];
  const passed = id => isDone(id) || isKnown(id);
  const subjectProgress = s => { const a = lessonsOf(s); return { done: a.filter(l => passed(l.id)).length, total: a.length }; };
  const nextIn = (s, shortOnly) => lessonsOf(s).find(l => !passed(l.id) && (!shortOnly || l.type === 'short')) || (shortOnly ? lessonsOf(s).find(l => !passed(l.id)) : null);
  const station = l => lessonsOf(l.subject).indexOf(l) + 1;
  const subStyle = s => `--c:${SUB[s].color}`;
  const bullet = (s, size = '') => `<span class="bullet ${size}" style="${subStyle(s)}" aria-label="${esc(SUB[s].name)} line">${SUB[s].letter}</span>`;
  const lvlLabel = n => `${LEVELS[n].code} ${LEVELS[n].name}`;

  // ---------------- today's pick ----------------
  function activeSubjects() { const a = S.subjects.filter(s => SUB[s] && lessonsOf(s).length); return a.length ? a : SUBJECTS.map(s => s.id).filter(s => lessonsOf(s).length); }
  function pickToday(force) {
    const t = dkey();
    if (!force && S.today && S.today.date === t && BY_ID[S.today.id]) return BY_ID[S.today.id];
    const rolls = force && S.today && S.today.date === t ? (S.today.rolls || 0) + 1 : 0;
    const subs = activeSubjects().filter(s => nextIn(s));
    if (!subs.length) return null;
    let sub;
    if (S.mode === 'focus' && subs.includes(S.focus)) sub = S.focus;
    else if (S.mode === 'random') sub = subs[hash(t + ':' + rolls) % subs.length];
    else sub = subs[(dayNum() + rolls) % subs.length];
    const l = nextIn(sub, true);
    S.today = { date: t, id: l.id, rolls }; save();
    return l;
  }

  // ---------------- review deck ----------------
  const INTERVALS = [0, 1, 3, 7, 16, 35, 90];
  function cardQ(cid) {
    const [src, i] = cid.split('#');
    if (src.startsWith('exam:')) { const [, s, lv] = src.split(':'); return ((L.exams[s] || {})[lv] || [])[+i]; }
    return ((BY_ID[src] || {}).quiz || [])[+i];
  }
  const cardSub = cid => cid.startsWith('exam:') ? cid.split(':')[1] : (BY_ID[cid.split('#')[0]] || {}).subject;
  function grade(cid, ok, fromReview) {
    const c = S.review[cid];
    if (!fromReview) {
      if (!ok) S.review[cid] = { box: 0, due: dkey() };
      else if (!c) S.review[cid] = { box: 1, due: addDays(INTERVALS[2]) };
      return;
    }
    if (ok) { const box = Math.min((c ? c.box : 0) + 1, 6); S.review[cid] = { box, due: addDays(INTERVALS[box]) }; }
    else S.review[cid] = { box: 0, due: addDays(1) };
  }
  const dueCards = () => Object.entries(S.review).filter(([cid, c]) => c.due <= dkey() && cardQ(cid)).sort((a, b) => a[1].due < b[1].due ? -1 : 1).map(([cid]) => cid);

  // ---------------- UI helpers ----------------
  function toast(msg) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2400); }
  function sheet(html, wire) {
    const bg = document.createElement('div'); bg.className = 'sheet-bg';
    bg.innerHTML = `<div class="sheet" role="dialog">${html}</div>`;
    bg.addEventListener('click', e => { if (e.target === bg) bg.remove(); });
    document.body.appendChild(bg); if (wire) wire(bg.firstChild, () => bg.remove());
    return bg;
  }
  const ICON = {
    today: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="15" rx="4"/><path d="M5 11h14M8.5 21l1.5-3m5.5 3-1.5-3"/><circle cx="9" cy="14.5" r=".6" fill="currentColor"/><circle cx="15" cy="14.5" r=".6" fill="currentColor"/></svg>',
    lines: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2" fill="var(--surface)"/><circle cx="15" cy="12" r="2" fill="var(--surface)"/><circle cx="10" cy="18" r="2" fill="var(--surface)"/></svg>',
    review: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.3-5.6L4 8.7"/><path d="M4 4v4.7h4.7"/><path d="M12 8v4l3 2"/></svg>',
    news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-5 4 4 8-9"/><path d="M15 7h5v5"/></svg>',
    me: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    aa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19l5-13 5 13M5 14h6M15 19l3.5-8 3.5 8M16 16.5h5"/></svg>',
    listen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/></svg>',
    toc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1" fill="currentColor"/><circle cx="4.5" cy="12" r="1" fill="currentColor"/><circle cx="4.5" cy="18" r="1" fill="currentColor"/></svg>',
    chev: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  };
  function tabs(active) {
    const due = dueCards().length;
    const t = [['today', 'Today'], ['lines', 'Lines'], ['review', 'Review'], ['news', 'Report'], ['me', 'You']];
    $('#tabs').innerHTML = `<nav>${t.map(([k, n]) => `<a href="#/${k}" class="${active === k ? 'on' : ''}" ${active === k ? 'aria-current="page"' : ''}>${ICON[k]}${n}${k === 'review' && due ? `<span class="badge">${due > 99 ? '99+' : due}</span>` : ''}</a>`).join('')}</nav>`;
  }

  // ---------------- TTS ----------------
  const TTS = {
    on: false, q: [], i: 0,
    voice() {
      const vs = speechSynthesis.getVoices().filter(v => /^en(-|_)/i.test(v.lang));
      return vs.find(v => /premium|enhanced|natural/i.test(v.name) && /US/i.test(v.lang)) || vs.find(v => /Samantha|Ava|Allison|Evan|Google US English/i.test(v.name)) || vs.find(v => /en-US/i.test(v.lang)) || vs[0];
    },
    start(els, from = 0) {
      if (!('speechSynthesis' in window)) return toast('Read aloud is not available on this device');
      this.stop(); this.on = true; this.q = els; this.i = from; this.next();
    },
    next() {
      $$('.speaking').forEach(e => e.classList.remove('speaking'));
      if (!this.on || this.i >= this.q.length) { this.stop(); return; }
      const el = this.q[this.i];
      const u = new SpeechSynthesisUtterance(el.dataset.say || el.innerText);
      const v = this.voice(); if (v) u.voice = v; u.lang = (v && v.lang) || 'en-US'; u.rate = S.rate;
      u.onend = () => { if (this.on) { this.i++; this.next(); } };
      u.onerror = () => { if (this.on) { this.i++; this.next(); } };
      el.classList.add('speaking');
      const r = el.getBoundingClientRect(); if (r.top < 70 || r.bottom > innerHeight - 40) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      speechSynthesis.speak(u);
    },
    stop() { this.on = false; try { speechSynthesis.cancel(); } catch (e) { } $$('.speaking').forEach(e => e.classList.remove('speaking')); const b = $('#ttsBtn'); if (b) b.classList.remove('on'); },
  };
  if ('speechSynthesis' in window) speechSynthesis.getVoices();

  // ---------------- reading session timer ----------------
  const Session = {
    id: null, acc: 0, since: 0,
    begin(id) { this.end(); this.id = id; this.acc = 0; this.since = document.hidden ? 0 : Date.now(); },
    pause() { if (this.since) { this.acc += Date.now() - this.since; this.since = 0; } },
    resume() { if (this.id && !this.since) this.since = Date.now(); },
    end() {
      if (!this.id) return 0; this.pause();
      const l = BY_ID[this.id]; const cap = (l ? l.minutes * 1.6 : 10) * 60000;
      const min = Math.min(this.acc, cap) / 60000; this.id = null; this.acc = 0;
      if (min > 0.2) logActivity(min, 0, 0);
      return min;
    },
  };
  document.addEventListener('visibilitychange', () => document.hidden ? (Session.pause(), saveScroll()) : Session.resume());

  // ---------------- block rendering ----------------
  function block(b, i) {
    const say = (t) => ` data-say="${esc(String(t).replace(/[*_]/g, ''))}"`;
    switch (b.t) {
      case 'p': return `<p class="say"${say(b.text)}>${md(b.text)}</p>`;
      case 'h': return `<h3 class="say">${md(b.text)}</h3>`;
      case 'key': return `<p class="key say"${say(b.text)}>${md(b.text)}</p>`;
      case 'list': { const tg = b.ordered ? 'ol' : 'ul'; return `<${tg} class="say"${say(b.items.join('. '))}>${b.items.map(x => `<li>${md(x)}</li>`).join('')}</${tg}>`; }
      case 'example': return `<div class="callout example say"${say((b.title || 'Example') + '. ' + b.text)}><div class="lb">Example${b.title ? ': ' + esc(b.title) : ''}</div><div class="txt">${md(b.text)}</div></div>`;
      case 'term': return `<div class="callout term say"${say(b.word + '. ' + b.def)}><span class="w">${esc(b.word)}</span> <span>${md(b.def)}</span></div>`;
      case 'tip': return `<div class="callout tip say"${say('Try it today. ' + b.text)}><div class="lb">Try it today</div>${md(b.text)}</div>`;
      case 'warn': return `<div class="callout warn say"${say('Watch out. ' + b.text)}><div class="lb">Watch out</div>${md(b.text)}</div>`;
      case 'quote': return `<blockquote class="quote say"${say(b.text + ', ' + (b.by || ''))}>“${md(b.text)}”${b.by ? `<cite>${esc(b.by)}</cite>` : ''}</blockquote>`;
      case 'check': return `<div class="check say"${say('Think about it. ' + b.q)}><button type="button" aria-expanded="false"><span class="lb">Think about it · tap to reveal</span>${md(b.q)}</button><div class="ans">${md(b.a)}</div></div>`;
      case 'chapter': return `<div class="chapter say" id="ch-${i}"${say(b.title)}><small>Chapter ${b._n}${b.minutes ? ` · ${b.minutes} min` : ''}</small><h3>${md(b.title)}</h3></div>`;
      case 'exercise': return `<div class="exercise say"${say('Exercise. ' + (b.title || '') + '. ' + b.prompt)}><div class="lb">Exercise</div><h4>${md(b.title || '')}</h4><div>${md(b.prompt).replace(/\n/g, '<br>')}</div>${b.steps ? `<ol>${b.steps.map(s => `<li>${md(s)}</li>`).join('')}</ol>` : ''}<details class="sol"><summary>Show worked answer</summary><div>${md(b.answer)}</div></details></div>`;
      case 'fig': return fig(b);
      default: return '';
    }
  }

  // ---------------- quiz engine ----------------
  function quiz(host, items, { title = 'Quick check', onAnswer, onDone, doneLabel = 'Finish' } = {}) {
    let i = 0, score = 0; const res = [];
    function draw() {
      const it = items[i], q = it.q;
      host.innerHTML = `<div class="qz-card"><div class="qz-meta"><span>${esc(title)} · ${i + 1} of ${items.length}</span><span class="qz-dots">${items.map((_, k) => `<i class="${k < i ? (res[k] ? 'ok' : 'ko') : k === i ? 'cur' : ''}"></i>`).join('')}</span></div>
        ${it.label ? `<div style="margin-bottom:8px">${it.label}</div>` : ''}<div class="qz-q">${md(q.q)}</div>
        ${q.options.map((o, k) => `<button class="qz-opt" data-k="${k}"><span class="k">${'ABCD'[k]}</span><span>${md(o)}</span></button>`).join('')}<div class="qz-after"></div></div>`;
      $$('.qz-opt', host).forEach(b => b.onclick = () => {
        const k = +b.dataset.k, ok = k === q.answer;
        if (ok) score++; res[i] = ok;
        $$('.qz-opt', host).forEach(x => { x.disabled = true; const kk = +x.dataset.k; if (kk === q.answer) x.classList.add('ok'); else if (kk === k) x.classList.add('ko'); });
        if (navigator.vibrate) navigator.vibrate(ok ? 12 : [20, 40, 20]);
        onAnswer && onAnswer(it, ok);
        $('.qz-after', host).innerHTML = `<div class="qz-why"><b>${ok ? 'Correct.' : 'Not quite.'}</b> ${md(q.why || '')}</div><button class="btn line block" id="qzNext">${i + 1 < items.length ? 'Next question' : doneLabel}</button>`;
        $('#qzNext', host).onclick = () => { i++; if (i < items.length) { draw(); host.scrollIntoView({ block: 'start', behavior: 'smooth' }); } else onDone && onDone(score, res); };
        $('#qzNext', host).scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });
    }
    draw();
  }

  // ================= VIEWS =================
  const view = () => $('#view');
  function setLine(s) { view().setAttribute('style', s ? subStyle(s) : ''); }

  // ---------- welcome ----------
  function vWelcome() {
    tabs(''); document.body.classList.add('reading'); setLine('ai');
    let sel = new Set(S.subjects);
    view().innerHTML = `<div class="arrive" style="min-height:auto;margin-top:6vh">
      <div class="sign"><div class="sign-top">${SUBJECTS.map(s => bullet(s.id, 'sm')).join('')}</div><h2>Fermata</h2><p>One stop, one lesson. Five minutes a day on the train for money, accounting, investing, AI and a better mind.</p></div></div>
      <div class="panel" style="margin-top:16px"><div class="field"><label for="nm">What should I call you?</label><input type="text" id="nm" value="${esc(S.name)}" placeholder="Your first name" autocomplete="given-name"></div>
      <div class="field"><label>Your lines (you can change these later)</label>${SUBJECTS.map(s => `<button class="row" data-s="${s.id}" style="padding:10px 0">${bullet(s.id)}<div class="grow"><div class="t">${s.name}</div><div class="s">${s.blurb}</div></div><span class="toggle ${sel.has(s.id) ? 'on' : ''}" style="${subStyle(s.id)}"></span></button>`).join('')}</div>
      <div class="field"><label>How should I choose your daily lesson?</label>${modeSeg()}</div></div>
      <button class="btn line block" id="go" style="margin-top:18px;height:52px">Start riding</button>
      <p class="muted" style="font-size:13.5px;text-align:center;margin-top:14px">Tip: in Safari tap Share, then “Add to Home Screen”, so Fermata opens like an app and works offline in the tunnel.</p>`;
    $$('[data-s]').forEach(b => b.onclick = () => { const id = b.dataset.s; sel.has(id) ? sel.delete(id) : sel.add(id); $('.toggle', b).classList.toggle('on', sel.has(id)); });
    wireModeSeg();
    $('#go').onclick = () => { S.name = $('#nm').value.trim(); S.subjects = SUBJECTS.map(s => s.id).filter(id => sel.has(id)); if (!S.subjects.length) S.subjects = SUBJECTS.map(s => s.id); S.onboarded = true; S.today = null; save(); location.hash = '#/today'; };
  }
  function modeSeg() {
    return `<div class="seg" id="modeSeg">${[['rotate', 'Rotate lines'], ['random', 'Random'], ['focus', 'One line']].map(([k, n]) => `<button data-m="${k}" class="${S.mode === k ? 'on' : ''}">${n}</button>`).join('')}</div>
      <div id="modeNote" class="muted" style="font-size:13px;margin-top:8px"></div>
      <div id="focusPick" style="margin-top:8px;display:${S.mode === 'focus' ? 'flex' : 'none'};gap:6px;flex-wrap:wrap">${SUBJECTS.map(s => `<button class="pill ${S.focus === s.id ? 'c' : ''}" data-f="${s.id}" style="${subStyle(s.id)}">${s.name}</button>`).join('')}</div>`;
  }
  function wireModeSeg() {
    const note = { rotate: 'A different line each day, in turn. Balanced progress everywhere.', random: 'A surprise line every day. Tap Shuffle if you want another.', focus: 'Stay on one line every day until you finish it.' };
    const upd = () => { $('#modeNote').textContent = note[S.mode]; $('#focusPick').style.display = S.mode === 'focus' ? 'flex' : 'none'; };
    $$('#modeSeg button').forEach(b => b.onclick = () => { S.mode = b.dataset.m; S.today = null; save(); $$('#modeSeg button').forEach(x => x.classList.toggle('on', x === b)); upd(); });
    $$('[data-f]').forEach(b => b.onclick = () => { S.focus = b.dataset.f; S.today = null; save(); $$('[data-f]').forEach(x => x.classList.toggle('c', x === b)); });
    upd();
  }

  // ---------- today ----------
  function vToday() {
    tabs('today'); setLine(null);
    const l = pickToday();
    const h = new Date().getHours();
    const greet = h < 5 ? 'Late ride' : h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
    const doneToday = l && isDone(l.id) && (S.done[l.id].at || '').startsWith(dkey());
    const due = dueCards();
    const deep = pickDeep();
    const news = cachedNews();
    const nexts = activeSubjects().map(s => ({ s, l: nextIn(s, true) })).filter(x => x.l && (!l || x.l.id !== l.id));
    let card;
    if (!l) card = `<div class="sign" style="${subStyle('finance')}"><h2>Every line complete</h2><p>You rode every station. Retake exams, or review your cards to keep it sharp.</p></div>`;
    else if (doneToday) {
      const nx = nextIn(l.subject, true);
      card = `<div class="sign" style="${subStyle(l.subject)}"><div class="sign-top">${bullet(l.subject, 'sm')} ${SUB[l.subject].name}</div><h2>Today’s ride is done</h2><p>You finished “${esc(l.title)}”. Want one more stop?</p>
        <div class="sign-actions">${nx ? `<a class="btn line" href="#/read/${nx.id}">Next: ${esc(nx.title)}</a>` : ''}${due.length ? `<a class="btn ghost" href="#/review">Review ${due.length}</a>` : ''}</div></div>`;
    } else {
      const started = S.pos[l.id] > 0.05;
      card = `<div class="sign" style="${subStyle(l.subject)}"><div class="sign-top">${bullet(l.subject, 'sm')} ${SUB[l.subject].name} · ${lvlLabel(l.level)}</div>
        <h2>${esc(l.title)}</h2><p>${esc(l.hook)}</p>
        <div class="sign-meta"><span>${l.minutes} min</span><span>Station ${station(l)} of ${lessonsOf(l.subject).length}</span></div>
        <div class="sign-actions"><a class="btn line" href="#/read/${l.id}">${started ? 'Continue reading' : 'Start today’s ride'}</a><button class="btn ghost" id="shuffle">${S.mode === 'random' ? 'Shuffle' : 'Change line'}</button></div></div>`;
    }
    const wk = [...Array(7)].map((_, i) => { const k = addDays(i - 6); const d = new Date(k + 'T12:00:00'); return `<span><i class="${S.log[k] ? 'on' : ''} ${i === 6 ? 'today' : ''}"></i>${'SMTWTFS'[d.getDay()]}</span>`; }).join('');
    const doneCount = Object.keys(S.done).length;
    view().innerHTML = `<div class="page-h"><div><h1>${greet}${S.name ? ', ' + esc(S.name) : ''}</h1><p>${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p></div></div>
      ${card}
      <div class="stats"><div><b>${streak()}</b><span>day streak</span></div><div><b>${weekMinutes()}</b><span>min this week</span></div><div><b>${doneCount}</b><span>stations done</span></div></div>
      <div class="week">${wk}</div>
      ${due.length ? `<a class="panel row" href="#/review" style="margin-top:16px">${ICON.review.replace('<svg', '<svg width="26" height="26"')}<div class="grow"><div class="t">${due.length} card${due.length > 1 ? 's' : ''} to review</div><div class="s">About ${Math.max(1, Math.round(Math.min(due.length, 10) * 0.3))} min. Remembering is how learning sticks.</div></div><span class="chev">${ICON.chev}</span></a>` : ''}
      ${news ? newsTeaser(news) : `<a class="panel row" href="#/news" style="margin-top:12px">${ICON.news.replace('<svg', '<svg width="26" height="26"')}<div class="grow"><div class="t">Morning report</div><div class="s">Markets, stock news and analysis, refreshed every morning.</div></div><span class="chev">${ICON.chev}</span></a>`}
      ${deep ? `<h2 class="sec-h">Long ride <small>for a slow commute or a flight</small></h2>
        <a class="panel row" href="#/read/${deep.id}" style="${subStyle(deep.subject)}">${bullet(deep.subject, 'lg')}<div class="grow"><div class="t">${esc(deep.title)}</div><div class="s">Deep Dive · ${deep.minutes} min · ${S.pos[deep.id] > 0.03 ? Math.round(S.pos[deep.id] * 100) + '% read' : SUB[deep.subject].name}</div></div><span class="chev">${ICON.chev}</span></a>` : ''}
      ${nexts.length ? `<h2 class="sec-h">Next on your lines</h2><div class="panel">${nexts.map(({ s, l: x }) => `<a class="row" href="#/read/${x.id}">${bullet(s)}<div class="grow"><div class="t">${esc(x.title)}</div><div class="s">${SUB[s].name} · ${LEVELS[x.level].code} · ${x.minutes} min</div></div><span class="chev">${ICON.chev}</span></a>`).join('')}</div>` : ''}`;
    const sh = $('#shuffle');
    if (sh) sh.onclick = () => {
      if (S.mode === 'random') { pickToday(true); vToday(); return; }
      sheet(`<h3>Ride a different line today</h3><div class="panel">${activeSubjects().map(s => { const x = nextIn(s, true); return x ? `<button class="row" data-pick="${x.id}">${bullet(s)}<div class="grow"><div class="t">${SUB[s].name}</div><div class="s">${esc(x.title)} · ${x.minutes} min</div></div></button>` : ''; }).join('')}</div>`,
        (el, close) => $$('[data-pick]', el).forEach(b => b.onclick = () => { S.today = { date: dkey(), id: b.dataset.pick, rolls: (S.today && S.today.rolls) || 0 }; save(); close(); vToday(); }));
    };
  }
  function pickDeep() {
    const all = activeSubjects().flatMap(s => lessonsOf(s).filter(l => l.type === 'deep'));
    const inProg = all.find(l => !passed(l.id) && S.pos[l.id] > 0.03);
    if (inProg) return inProg;
    const ready = all.filter(l => !passed(l.id) && lessonsOf(l.subject).filter(x => x.order < l.order && x.type === 'short' && x.level === l.level).every(x => passed(x.id)));
    if (ready.length) return ready[dayNum() % ready.length];
    const any = all.filter(l => !passed(l.id) && l.level === 1);
    return any.length ? any[dayNum() % any.length] : null;
  }

  // ---------- lines ----------
  function strip(s) {
    const a = lessonsOf(s), n = a.length; if (!n) return '';
    const nx = nextIn(s);
    const pos = i => n === 1 ? 50 : (i / (n - 1)) * 100;
    const lastDone = a.reduce((m, l, i) => passed(l.id) ? i : m, -1);
    return `<div class="strip" style="${subStyle(s)}"><span class="fill" style="width:${lastDone < 0 ? 0 : pos(lastDone)}%"></span>${a.map((l, i) => `<span class="st ${passed(l.id) ? 'done' : ''} ${l.type === 'deep' ? 'deep' : ''} ${nx && nx.id === l.id ? 'next' : ''}" style="left:${pos(i)}%"></span>`).join('')}</div>
      <div class="strip-lv"><span>101</span><span>201</span><span>301</span></div>`;
  }
  function vLines() {
    tabs('lines'); setLine(null);
    view().innerHTML = `<div class="page-h"><div><h1>Lines</h1><p>Seven lines, ${L.lessons.length} stations. Big dots are Deep Dives.</p></div></div>
      ${SUBJECTS.map(s => { const p = subjectProgress(s.id); const nx = nextIn(s.id); return `<a class="line-card" href="#/line/${s.id}" style="${subStyle(s.id)}"><div class="lc-h">${bullet(s.id, 'lg')}<div class="grow" style="flex:1"><h3>${s.name}</h3><div class="s">${p.done} of ${p.total} stations${nx ? ' · next: ' + esc(nx.title) : p.total ? ' · complete' : ' · coming soon'}</div></div></div>${strip(s.id)}</a>`; }).join('')}`;
  }
  function vLine(s) {
    if (!SUB[s]) return go('#/lines');
    tabs('lines'); setLine(s);
    const a = lessonsOf(s), p = subjectProgress(s), nx = nextIn(s);
    const ex = L.exams[s] || {};
    const zones = [1, 2, 3].map(lv => {
      const items = a.filter(l => l.level === lv);
      const best = (S.exams[s + ':' + lv] || {}).best;
      const lis = items.map(l => {
        const st = isDone(l.id) ? 'done' : isKnown(l.id) ? 'known' : '';
        return `<li><a class="stn ${st} ${l.type === 'deep' ? 'deep' : ''} ${nx && nx.id === l.id ? 'next' : ''}" href="#/read/${l.id}"><span class="dot"></span><div class="grow"><div class="t">${esc(l.title)}</div><div class="s">${l.type === 'deep' ? '<span class="pill c">Deep Dive</span>' : ''}<span>${l.minutes} min</span>${isDone(l.id) && S.done[l.id].total ? `<span>Quiz ${S.done[l.id].score}/${S.done[l.id].total}</span>` : ''}${isKnown(l.id) && !isDone(l.id) ? '<span>Known from placement</span>' : ''}${nx && nx.id === l.id ? '<span class="here">Next stop</span>' : ''}</div></div></a></li>`;
      }).join('');
      const exam = ex[lv] ? `<li><a class="stn exam-stn ${best != null && best >= 7 ? 'done' : ''}" href="#/exam/${s}/${lv}"><span class="dot"></span><div class="grow"><div class="t">${LEVELS[lv].code} exam</div><div class="s"><span>10 questions · pass with 7</span>${best != null ? `<span>Best ${best}/10${best >= 7 ? ' · passed' : ''}</span>` : ''}</div></div></a></li>` : '';
      return items.length ? `<section class="zone"><div class="zone-h"><b>${LEVELS[lv].code}</b><span>${LEVELS[lv].name}</span></div><ol class="stations ${lv > 1 ? 'cont' : ''}">${lis}${exam}</ol></section>` : '';
    }).join('');
    const pl = S.placement[s];
    view().innerHTML = `<a href="#/lines" class="btn soft sm" style="margin-top:4px">${ICON.back.replace('<svg', '<svg width="16" height="16"')} Lines</a>
      <div class="line-hero">${bullet(s, 'xl')}<div><h1>${SUB[s].name}</h1><p>${SUB[s].blurb}</p></div></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">${nx ? `<a class="btn line" href="#/read/${nx.id}">${p.done ? 'Continue' : 'Start the line'}</a>` : ''}${ex[1] ? `<a class="btn soft" href="#/placement/${s}">${pl != null ? 'Retake placement' : 'Placement test'}</a>` : ''}</div>
      <p class="muted" style="font-size:13.5px;margin:10px 0 0">${p.done} of ${p.total} stations${pl != null ? ` · placement: ${pl ? 'started at ' + (pl < 3 ? LEVELS[pl + 1].code : 'the end') : 'from 101'}` : ''}</p>
      ${zones || '<div class="empty"><b>Lessons coming soon</b>This line is being built.</div>'}`;
  }

  // ---------- reader ----------
  let scrollHandler = null, curRead = null;
  function saveScroll() {
    if (!curRead) return;
    const h = document.documentElement.scrollHeight - innerHeight;
    if (h > 0) { const r = Math.min(1, scrollY / h); if (!isDone(curRead) || r > 0.02) S.pos[curRead] = Math.round(r * 1000) / 1000; save(); }
  }
  function vRead(id) {
    const l = BY_ID[id]; if (!l) return go('#/today');
    tabs(''); document.body.classList.add('reading'); setLine(l.subject);
    curRead = id; Session.begin(id);
    let n = 0; l.blocks.forEach(b => { if (b.t === 'chapter') b._n = ++n; });
    const chapters = l.blocks.map((b, i) => ({ b, i })).filter(x => x.b.t === 'chapter');
    const deep = l.type === 'deep';
    view().innerHTML = `<div class="rd-prog" id="prog"></div>
      <div class="rd-top"><button class="icon-btn" id="back" aria-label="Back">${ICON.back}</button><div class="ttl">${esc(SUB[l.subject].name)} · ${esc(l.title)}</div>
        ${deep ? `<button class="icon-btn" id="tocBtn" aria-label="Chapters">${ICON.toc}</button>` : ''}<button class="icon-btn" id="aaBtn" aria-label="Text size">${ICON.aa}</button><button class="icon-btn" id="ttsBtn" aria-label="Read aloud">${ICON.listen}</button></div>
      <header class="rd-head"><div class="sign"><div class="sign-top">${bullet(l.subject, 'sm')} ${SUB[l.subject].name} · ${lvlLabel(l.level)}</div><h2>${esc(l.title)}</h2><p>${esc(l.hook)}</p>
        <div class="sign-meta"><span>${deep ? 'Deep Dive · ' : ''}${l.minutes} min</span><span>Station ${station(l)} of ${lessonsOf(l.subject).length}</span>${isDone(l.id) ? '<span>Done ✓</span>' : ''}</div></div></header>
      ${deep ? `<div class="toc panel">${chapters.map((c, k) => `<button class="row" data-ch="${c.i}"><span class="n">${k + 1}</span><div class="grow"><div class="t">${esc(c.b.title)}</div>${c.b.minutes ? `<div class="s">${c.b.minutes} min</div>` : ''}</div></button>`).join('')}</div>` : ''}
      <article class="reader" style="--fs:${S.fs}px">${l.blocks.map(block).join('')}</article>
      <section class="takeaways say" data-say="Takeaways. ${esc(l.takeaways.join('. '))}"><h3>Takeaways</h3><ul>${l.takeaways.map(t => `<li>${md(t)}</li>`).join('')}</ul></section>
      <section class="quiz" id="quiz"></section>`;
    wireBreath(view());
    $$('.check button').forEach(b => b.onclick = () => { const c = b.parentNode; c.classList.toggle('open'); b.setAttribute('aria-expanded', c.classList.contains('open')); });
    $('#back').onclick = () => { history.length > 1 ? history.back() : go('#/today'); };
    $('#aaBtn').onclick = () => { const sizes = [17, 19, 21, 23]; S.fs = sizes[(sizes.indexOf(S.fs) + 1) % sizes.length] || 19; save(); $('.reader').style.setProperty('--fs', S.fs + 'px'); toast(`Text size ${sizes.indexOf(S.fs) + 1} of 4`); };
    $('#ttsBtn').onclick = () => {
      if (TTS.on) return TTS.stop();
      const els = $$('.say', view()); const vis = els.findIndex(e => e.getBoundingClientRect().bottom > 80);
      $('#ttsBtn').classList.add('on'); TTS.start(els, Math.max(0, vis));
    };
    const jump = i => { const el = $('#ch-' + i); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 70, behavior: 'smooth' }); };
    $$('[data-ch]').forEach(b => b.onclick = () => jump(b.dataset.ch));
    if ($('#tocBtn')) $('#tocBtn').onclick = () => sheet(`<h3>Chapters</h3><div class="panel">${chapters.map((c, k) => `<button class="row" data-j="${c.i}"><span class="bullet sm" style="${subStyle(l.subject)}">${k + 1}</span><div class="grow"><div class="t">${esc(c.b.title)}</div></div></button>`).join('')}</div>`, (el, close) => $$('[data-j]', el).forEach(b => b.onclick = () => { close(); jump(b.dataset.j); }));
    const prog = $('#prog'); let t = 0;
    scrollHandler = () => { const h = document.documentElement.scrollHeight - innerHeight; prog.style.width = (h > 0 ? Math.min(100, scrollY / h * 100) : 0) + '%'; clearTimeout(t); t = setTimeout(saveScroll, 400); };
    addEventListener('scroll', scrollHandler, { passive: true });
    // resume position
    const p = S.pos[id];
    if (p > 0.03 && p < 0.97 && !isDone(id)) requestAnimationFrame(() => { const h = document.documentElement.scrollHeight - innerHeight; window.scrollTo(0, p * h); toast('Picked up where you left off'); });
    else window.scrollTo(0, 0);
    // quiz
    const qHost = $('#quiz');
    const startQuiz = () => quiz(qHost, l.quiz.map((q, i) => ({ q, cid: `${l.id}#${i}` })), {
      title: 'Check your stop', doneLabel: 'Arrive at the station',
      onAnswer: (it, ok) => { grade(it.cid, ok, false); save(); },
      onDone: (score) => complete(l, score, l.quiz.length),
    });
    if (isDone(id)) {
      qHost.innerHTML = `<div class="qz-card" style="text-align:center"><div class="qz-q">You already arrived here${S.done[id].total ? ` (quiz ${S.done[id].score}/${S.done[id].total})` : ''}.</div><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn soft" id="retake">Retake the quiz</button>${nextIn(l.subject) ? `<a class="btn line" href="#/read/${nextIn(l.subject).id}">Next station</a>` : ''}</div></div>`;
      $('#retake').onclick = startQuiz;
    } else if (l.quiz && l.quiz.length) {
      qHost.innerHTML = `<div class="qz-card" style="text-align:center"><div class="qz-q">${l.quiz.length} quick questions before you arrive.</div><p class="muted" style="margin:-6px 0 14px;font-size:14.5px">Answering from memory is what makes it stick.</p><button class="btn line" id="startQ">Start the check</button> <button class="btn soft" id="skipQ" style="margin-top:8px">Skip and mark done</button></div>`;
      $('#startQ').onclick = startQuiz; $('#skipQ').onclick = () => complete(l, null, 0);
    }
  }
  function leaveReader() {
    if (scrollHandler) { removeEventListener('scroll', scrollHandler); scrollHandler = null; }
    saveScroll(); curRead = null; TTS.stop(); Session.end();
    document.body.classList.remove('reading');
  }
  function complete(l, score, total) {
    const first = !isDone(l.id);
    const min = Session.end();
    if (min < 0.2) logActivity(Math.min(l.minutes, 3), 0, 0); // quiz-only revisit still counts a little
    S.done[l.id] = { at: new Date().toISOString(), score: score ?? 0, total };
    S.pos[l.id] = 0; logActivity(0, first ? 1 : 0, 0); save();
    curRead = null; if (scrollHandler) { removeEventListener('scroll', scrollHandler); scrollHandler = null; }
    TTS.stop();
    const nx = nextIn(l.subject); const p = subjectProgress(l.subject);
    const lvDone = lessonsOf(l.subject).filter(x => x.level === l.level).every(x => passed(x.id));
    const exam = (L.exams[l.subject] || {})[l.level];
    view().innerHTML = `<div class="arrive"><div class="sign"><div class="sign-top">${bullet(l.subject, 'sm')} ${SUB[l.subject].name} · station ${station(l)}</div><h2>${esc(l.title)}</h2><p>${total ? `You scored ${score} of ${total}.${score < total ? ' The ones you missed are in your review deck.' : ' Perfect stop.'}` : 'Marked as done.'}</p>
      <div class="sign-meta"><span>${p.done} of ${p.total} on this line</span><span>${streak()} day streak</span></div></div>
      ${strip(l.subject)}
      ${lvDone && exam && !((S.exams[l.subject + ':' + l.level] || {}).best >= 7) ? `<a class="btn line block" href="#/exam/${l.subject}/${l.level}">You finished ${LEVELS[l.level].code}: take the level exam</a>` : ''}
      ${nx ? `<a class="btn ${lvDone && exam ? 'soft' : 'line'} block" href="#/read/${nx.id}">Next station: ${esc(nx.title)}</a>` : ''}
      <a class="btn soft block" href="#/today">Back to today</a></div>`;
    window.scrollTo(0, 0);
  }

  // ---------- exams & placement ----------
  function vExam(s, lv) {
    const qs = (L.exams[s] || {})[lv]; if (!qs) return go('#/line/' + s);
    tabs(''); document.body.classList.add('reading'); setLine(s);
    const key = s + ':' + lv, best = (S.exams[key] || {}).best;
    view().innerHTML = `<div class="rd-top"><button class="icon-btn" id="back">${ICON.back}</button><div class="ttl">${SUB[s].name} · ${LEVELS[lv].code} exam</div></div>
      <div class="sign" style="margin-top:14px"><div class="sign-top">${bullet(s, 'sm')} ${SUB[s].name}</div><h2>${lvlLabel(lv)} exam</h2><p>10 questions across the whole level. Score 7 or more to pass. Missed questions go to your review deck.</p>${best != null ? `<div class="sign-meta"><span>Best so far ${best}/10</span></div>` : ''}</div>
      <div class="quiz" id="ex"><button class="btn line block" id="go">Start the exam</button></div>`;
    $('#back').onclick = () => go('#/line/' + s);
    $('#go').onclick = () => {
      const items = shuffle(qs.map((q, i) => ({ q, cid: `exam:${s}:${lv}#${i}` })), Date.now() & 0xffff);
      quiz($('#ex'), items, {
        title: `${LEVELS[lv].code} exam`, doneLabel: 'See my result',
        onAnswer: (it, ok) => { grade(it.cid, ok, false); save(); },
        onDone: (score) => {
          const pass = score >= 7; S.exams[key] = { best: Math.max(score, best || 0), last: score, at: new Date().toISOString() }; logActivity(4, 0, 0); save();
          $('#ex').innerHTML = `<div class="qz-card result"><div class="big" style="color:${pass ? 'var(--good)' : 'var(--ink)'}">${score}/10</div><p>${pass ? `Passed. ${LEVELS[lv].code} ${SUB[s].name} is yours.` : 'Not yet. Review the missed cards, reread a station or two, and try again.'}</p>
            <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><a class="btn line" href="#/line/${s}">Back to the line</a>${!pass ? '<a class="btn soft" href="#/review">Review now</a>' : ''}</div></div>`;
        },
      });
    };
  }
  function vPlacement(s) {
    const ex = L.exams[s]; if (!ex) return go('#/line/' + s);
    tabs(''); document.body.classList.add('reading'); setLine(s);
    view().innerHTML = `<div class="rd-top"><button class="icon-btn" id="back">${ICON.back}</button><div class="ttl">${SUB[s].name} · placement</div></div>
      <div class="sign" style="margin-top:14px"><div class="sign-top">${bullet(s, 'sm')} ${SUB[s].name}</div><h2>Where should you start?</h2><p>12 questions, 4 per level, easy to hard. Get 3 of 4 right on a level and its stations are marked as known, so your daily ride starts where it is useful. You can still open any station.</p></div>
      <div class="quiz" id="pl"><button class="btn line block" id="go">Start the placement test</button></div>`;
    $('#back').onclick = () => go('#/line/' + s);
    $('#go').onclick = () => {
      const seed = hash(s + Date.now());
      const items = [1, 2, 3].flatMap(lv => shuffle((ex[lv] || []).map((q, i) => ({ q, lv, label: `<span class="pill c">${LEVELS[lv].code}</span>` })), seed + lv).slice(0, 4));
      quiz($('#pl'), items, {
        title: 'Placement', doneLabel: 'See where I start',
        onDone: (score, res) => {
          let known = 0;
          for (const lv of [1, 2, 3]) { const r = items.map((it, i) => it.lv === lv ? res[i] : null).filter(x => x !== null); if (r.filter(Boolean).length >= 3) known = lv; else break; }
          S.placement[s] = known;
          lessonsOf(s).forEach(l => { if (l.level <= known) S.known[l.id] = true; else delete S.known[l.id]; });
          if (S.today && BY_ID[S.today.id] && BY_ID[S.today.id].subject === s) S.today = null;
          logActivity(4, 0, 0); save();
          $('#pl').innerHTML = `<div class="qz-card result"><div class="big">${score}/12</div><p>${known === 0 ? 'Start from 101. The foundations will pay off fast.' : known === 3 ? 'You know this line well. Use the exams and Deep Dives to sharpen it.' : `You know the ${LEVELS[known].code} material. Your line now starts at ${LEVELS[known + 1].code} ${LEVELS[known + 1].name}.`}</p><a class="btn line" href="#/line/${s}">See my line</a></div>`;
        },
      });
    };
  }

  // ---------- review ----------
  function vReview() {
    tabs('review'); setLine(null);
    const due = dueCards(), total = Object.keys(S.review).length;
    const later = Object.values(S.review).filter(c => c.due > dkey()).length;
    view().innerHTML = `<div class="page-h"><div><h1>Review</h1><p>Short questions from your past stations, timed so you remember them for good.</p></div></div>
      ${due.length ? `<div class="sign" style="${subStyle(cardSub(due[0]) || 'ai')}"><h2>${due.length} card${due.length > 1 ? 's' : ''} due</h2><p>Cards you miss come back tomorrow. Cards you know come back later and later: 1, 3, 7, 16, 35 days.</p><div class="sign-actions"><button class="btn line" id="go">Review ${Math.min(due.length, 10)} now</button></div></div><div class="quiz" id="rv"></div>`
        : `<div class="empty"><b>${total ? 'All caught up' : 'Your deck is empty'}</b>${total ? `${later} card${later === 1 ? '' : 's'} scheduled for later days.` : 'Finish a station quiz and its questions join your deck.'}</div>`}
      ${total ? `<h2 class="sec-h">Your deck</h2><div class="panel">${SUBJECTS.map(s => { const cs = Object.keys(S.review).filter(c => cardSub(c) === s.id); if (!cs.length) return ''; const d = cs.filter(c => S.review[c].due <= dkey()).length; const strong = cs.filter(c => S.review[c].box >= 3).length; return `<div class="row">${bullet(s.id)}<div class="grow"><div class="t">${s.name}</div><div class="s">${cs.length} cards · ${strong} strong${d ? ` · ${d} due` : ''}</div></div></div>`; }).join('')}</div>` : ''}`;
    const g = $('#go');
    if (g) g.onclick = () => {
      g.closest('.sign').remove();
      const items = due.slice(0, 10).map(cid => { const s = cardSub(cid); const src = cid.startsWith('exam:') ? `${LEVELS[cid.split(':')[2].split('#')[0]].code} exam` : (BY_ID[cid.split('#')[0]] || {}).title; return { q: cardQ(cid), cid, label: `<span class="pill c" style="${subStyle(s)}">${bullet(s, 'sm')} ${esc(src || '')}</span>` }; });
      quiz($('#rv'), items, {
        title: 'Review', doneLabel: 'Finish review',
        onAnswer: (it, ok) => { grade(it.cid, ok, true); save(); },
        onDone: (score) => { logActivity(Math.max(1, items.length * 0.3), 0, items.length); $('#rv').innerHTML = `<div class="qz-card result"><div class="big">${score}/${items.length}</div><p>Reviewed. ${dueCards().length ? dueCards().length + ' more due.' : 'All caught up for today.'}</p><a class="btn line" href="#/today">Back to today</a></div>`; tabs('review'); },
      });
    };
  }

  // ---------- news ----------
  const NEWS_KEY = 'fermata.news';
  const cachedNews = () => { try { return JSON.parse(localStorage.getItem(NEWS_KEY)); } catch (e) { return null; } };
  const SYN = { fed: ['interest rates', 'central bank', 'federal reserve'], 'federal reserve': ['interest rates', 'central bank'], powell: ['interest rates', 'central bank'], 'rate cut': ['interest rates'], 'rate hike': ['interest rates'], cpi: ['inflation'], 'consumer prices': ['inflation'], treasury: ['bonds', 'yield'], treasuries: ['bonds', 'yield'], yields: ['bonds', 'yield'], 'bond': ['bonds'], earnings: ['earnings', 'earnings report'], eps: ['earnings', 'eps'], guidance: ['guidance', 'earnings report'], 'beats': ['earnings report'], 'misses': ['earnings report'], dividend: ['dividends', 'dividend'], buyback: ['buybacks', 'share buybacks'], ipo: ['ipo', 'stock market'], valuation: ['valuation', 'p/e'], recession: ['business cycle', 'recession'], jobs: ['jobs report', 'economic data'], payrolls: ['jobs report'], gdp: ['gdp', 'economic data'], etf: ['etf', 'index funds'], 'index fund': ['index funds'], '401(k)': ['401(k)', 'retirement accounts'], ira: ['ira', 'roth ira'], 'credit card': ['credit cards', 'apr'], mortgage: ['mortgage', 'mortgages'], 'artificial intelligence': ['ai', 'large language models'], ' ai ': ['ai', 'artificial intelligence'], chatgpt: ['large language models'], 'nvidia': ['ai'], 'crypto': ['crypto'], bitcoin: ['crypto', 'bitcoin'], 'volatility': ['volatility', 'risk'], 'vix': ['volatility'], 'sell-off': ['volatility', 'loss aversion'], selloff: ['volatility'], rally: ['market sentiment'], inflation: ['inflation'], tariff: ['inflation', 'trade'], 'sec filing': ['10-k'], '10-k': ['10-k'], audit: ['audit'], 'tax': ['taxes', 'tax'] };
  let TAGS = null;
  function tagIndex() {
    if (TAGS) return TAGS;
    const m = new Map();
    L.lessons.forEach(l => (l.tags || []).forEach(t => { t = String(t).toLowerCase().trim(); if (t.length < 2) return; const cur = m.get(t); if (!cur || (cur.type === 'deep' && l.type === 'short') || (cur.level > l.level && cur.type === l.type)) m.set(t, l); }));
    TAGS = [...m.entries()].sort((a, b) => b[0].length - a[0].length);
    return TAGS;
  }
  function matchLesson(text) {
    const t = ' ' + text.toLowerCase().replace(/[^a-z0-9()&/' -]+/g, ' ') + ' ';
    const want = new Set();
    for (const [k, arr] of Object.entries(SYN)) if (t.includes(k.startsWith(' ') ? k : ' ' + k)) arr.forEach(x => want.add(x));
    const hits = new Set();
    for (const [tag] of tagIndex()) {
      if (want.has(tag) || (tag.length >= 3 && new RegExp(`[^a-z]${tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^a-z]`).test(t))) hits.add(tag);
    }
    if (!hits.size) return null;
    let best = null, bs = 0;
    for (const l of L.lessons) {
      let sc = 0;
      for (const tg of l.tags || []) { const k = String(tg).toLowerCase().trim(); if (hits.has(k)) sc += 1 + k.length / 12 + (want.has(k) ? 0.5 : 0); }
      if (!sc) continue;
      sc += (l.type === 'short' ? 0.3 : 0) + l.level * 0.05;
      if (sc > bs) { bs = sc; best = l; }
    }
    return best;
  }
  const learnChip = l => l ? `<a class="learn-chip" href="#/read/${l.id}" style="${subStyle(l.subject)}">${bullet(l.subject, 'sm')}<span>Learn: ${esc(l.title)}</span></a>` : '';
  function spark(pts, up) {
    if (!pts || pts.length < 2) return '';
    const mn = Math.min(...pts), mx = Math.max(...pts), r = (mx - mn) || 1;
    const d = pts.map((v, i) => `${(i / (pts.length - 1) * 100).toFixed(1)},${(28 - (v - mn) / r * 26).toFixed(1)}`).join(' L');
    return `<svg viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M${d}" fill="none" stroke="${up ? 'var(--good)' : 'var(--bad)'}" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>`;
  }
  function fmtPx(m) {
    if (m.kind === 'yield') return m.price.toFixed(2) + '%';
    if (m.kind === 'fx') return m.price.toFixed(4);
    return m.price >= 1000 ? m.price.toLocaleString('en-US', { maximumFractionDigits: 0 }) : m.price.toFixed(2);
  }
  const ago = iso => { if (!iso) return ''; const m = (Date.now() - Date.parse(iso)) / 60000; return m < 60 ? Math.max(1, Math.round(m)) + 'm ago' : m < 1440 ? Math.round(m / 60) + 'h ago' : Math.round(m / 1440) + 'd ago'; };
  function newsTeaser(n) {
    const spx = (n.markets || []).find(m => m.symbol === '^GSPC');
    return `<a class="panel row" href="#/news" style="margin-top:12px;align-items:flex-start">${ICON.news.replace('<svg', '<svg width="26" height="26" style="margin-top:2px"')}<div class="grow"><div class="t">${esc((n.brief && n.brief.headline) || 'Morning report')}</div><div class="s">${spx ? `S&P 500 <span class="${spx.changePct >= 0 ? 'up' : 'down'}">${spx.changePct >= 0 ? '+' : ''}${spx.changePct.toFixed(2)}%</span> · ` : ''}${n.date === dkey() ? 'today' : 'from ' + esc(n.date)}</div></div><span class="chev">${ICON.chev}</span></a>`;
  }
  function vNews() {
    tabs('news'); setLine('investing');
    const n = cachedNews();
    draw(n, !n || n.date !== dkey() || Date.now() - (n._fetched || 0) > 30 * 60000 ? 'loading' : '');
    if (!n || n.date !== dkey() || Date.now() - (n._fetched || 0) > 30 * 60000) refresh(false);
    function refresh(fresh) {
      fetch('/api/news' + (fresh ? '?fresh=' + Date.now() : ''), { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .then(j => { if (!j || !j.sections) throw new Error('bad'); j._fetched = Date.now(); try { localStorage.setItem(NEWS_KEY, JSON.stringify(j)); } catch (e) { } if (location.hash.startsWith('#/news')) draw(j, ''); })
        .catch(() => { if (location.hash.startsWith('#/news')) draw(cachedNews(), navigator.onLine ? 'error' : 'offline'); });
    }
    function draw(n, status) {
      const note = status === 'loading' ? 'Fetching this morning’s report…' : status === 'offline' ? 'You are offline. Showing the last report.' : status === 'error' ? 'Could not reach the report service. ' + (n ? 'Showing the last report.' : '') : '';
      if (!n) {
        view().innerHTML = `<div class="page-h"><div><h1>Morning report</h1><p>${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p></div></div><div class="empty"><b>${status === 'loading' ? 'Loading…' : 'No report yet'}</b>${status === 'loading' ? 'Pulling live markets and headlines.' : esc(note) + ' The report works once Fermata runs online on Vercel (it needs the small /api/news service). Lessons work everywhere.'}</div>`;
        return;
      }
      const b = n.brief || {};
      const gen = n.generatedAt ? new Date(n.generatedAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : '';
      const sections = (n.sections || []).filter(s => s.items && s.items.length);
      const ll = b.learn && b.learn.concept ? matchLesson(b.learn.concept + ' ' + (b.learn.explanation || '')) : null;
      view().innerHTML = `<div class="page-h"><div><h1>Morning report</h1><p>${new Date((n.date || dkey()) + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}${gen ? ' · updated ' + gen : ''}</p></div><button class="btn soft sm" id="refresh">Refresh</button></div>
        ${note ? `<p class="muted" style="font-size:13.5px;margin:-8px 0 12px">${esc(note)}</p>` : ''}
        <div class="brief"><div class="sign"><div class="sign-top">${b.source === 'ai' ? 'Written by AI from today’s headlines' : 'Today in one line'}</div><h2>${esc(b.headline || 'Markets this morning')}</h2>
          ${(b.bullets && b.bullets.length) ? `<ul>${b.bullets.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</div></div>
        ${(n.markets || []).length ? `<div class="mk">${n.markets.map(m => `<div class="tile"><div class="nm">${esc(m.name)}</div><div class="px">${fmtPx(m)}</div><div class="ch ${m.changePct >= 0 ? 'up' : 'down'}">${m.changePct >= 0 ? '▲' : '▼'} ${Math.abs(m.changePct).toFixed(2)}%</div>${spark(m.spark, m.changePct >= 0)}</div>`).join('')}</div>` : ''}
        ${(b.watch && b.watch.length) ? `<h2 class="sec-h">What to watch</h2><div class="panel">${b.watch.map(w => `<div class="row"><div class="grow" style="font-family:var(--read);font-size:15.5px">${esc(w)}</div></div>`).join('')}</div>` : ''}
        ${b.learn && b.learn.concept ? `<div class="learn-box"><h4>Today’s concept: ${esc(b.learn.concept)}</h4><p>${esc(b.learn.explanation || '')}</p>${learnChip(ll)}</div>` : ''}
        ${sections.map(s => `<h2 class="sec-h">${esc(s.title)}</h2><div class="panel" style="padding:0 14px">${s.items.map(it => { const l = matchLesson(it.title + ' ' + (it.summary || '')); return `<div class="news-item"><a href="${esc(it.link)}" target="_blank" rel="noopener" style="text-decoration:none;color:inherit"><div class="src"><span>${esc(it.source)}</span><span>${ago(it.published)}</span></div><h4>${esc(it.title)}</h4>${it.summary ? `<p>${esc(it.summary)}</p>` : ''}</a>${learnChip(l)}</div>`; }).join('')}</div>`).join('')}
        <p class="muted" style="font-size:12.5px;margin-top:18px">Headlines link to their publishers. Market data may be delayed. This is education, not investment advice.</p>`;
      $('#refresh').onclick = () => { draw(cachedNews(), 'loading'); refresh(true); };
    }
  }

  // ---------- me / settings ----------
  function accuracy(s) {
    let r = 0, t = 0;
    lessonsOf(s).forEach(l => { const d = S.done[l.id]; if (d && d.total) { r += d.score; t += d.total; } });
    Object.entries(S.exams).forEach(([k, e]) => { if (k.startsWith(s + ':')) { r += e.last; t += 10; } });
    return t ? Math.round(r / t * 100) : null;
  }
  function vMe() {
    tabs('me'); setLine(null);
    const doneN = Object.keys(S.done).length, totalMin = Math.round(Object.values(S.log).reduce((a, e) => a + (e.min || 0), 0));
    view().innerHTML = `<div class="page-h"><div><h1>${S.name ? esc(S.name) : 'You'}</h1><p>Your ride so far</p></div></div>
      <div class="stats"><div><b>${doneN}</b><span>stations</span></div><div><b>${totalMin}</b><span>minutes</span></div><div><b>${streak()}</b><span>day streak</span></div></div>
      <h2 class="sec-h">Your level by line <small>✓ = level exam passed</small></h2><div class="panel">${SUBJECTS.map(s => { const p = subjectProgress(s.id); const acc = accuracy(s.id); const lvl = [3, 2, 1].find(lv => (S.exams[s.id + ':' + lv] || {}).best >= 7) || S.placement[s.id] || 0; return `<a class="row" href="#/line/${s.id}">${bullet(s.id)}<div class="grow"><div class="t">${s.name}</div><div class="s">${lvl ? 'Level ' + LEVELS[lvl].code + ' · ' : ''}${p.done}/${p.total} stations${acc != null ? ` · ${acc}% right` : ''}</div></div><div class="badges">${[1, 2, 3].filter(lv => ((S.exams[s.id + ':' + lv] || {}).best || 0) >= 7).map(lv => `<span class="lvl-badge pass" style="${subStyle(s.id)}">✓ ${LEVELS[lv].code}</span>`).join('')}</div></a>`; }).join('')}</div>
      <h2 class="sec-h">Daily ride</h2><div class="panel"><div class="field"><label>How the daily lesson is chosen</label>${modeSeg()}</div>
        <div class="field"><label>My lines</label>${SUBJECTS.map(s => `<button class="row" data-s="${s.id}" style="padding:8px 0">${bullet(s.id, 'sm')}<div class="grow"><div class="t" style="font-weight:600">${s.name}</div></div><span class="toggle ${S.subjects.includes(s.id) ? 'on' : ''}" style="${subStyle(s.id)}"></span></button>`).join('')}</div></div>
      <h2 class="sec-h">Reading</h2><div class="panel">
        <div class="field"><label for="nm">Name</label><input type="text" id="nm" value="${esc(S.name)}" placeholder="Your first name"></div>
        <div class="field"><label>Text size</label><div class="seg" id="fsSeg">${[17, 19, 21, 23].map((v, i) => `<button data-v="${v}" class="${S.fs === v ? 'on' : ''}" style="font-size:${13 + i * 1.5}px">Aa</button>`).join('')}</div></div>
        <div class="field"><label>Appearance</label><div class="seg" id="thSeg">${[['auto', 'Auto'], ['light', 'Light'], ['dark', 'Dark']].map(([k, n]) => `<button data-v="${k}" class="${S.theme === k ? 'on' : ''}">${n}</button>`).join('')}</div></div>
        <div class="field"><label>Read-aloud speed</label><div class="seg" id="rtSeg">${[[0.85, 'Slow'], [1, 'Normal'], [1.15, 'Brisk'], [1.3, 'Fast']].map(([k, n]) => `<button data-v="${k}" class="${S.rate === k ? 'on' : ''}">${n}</button>`).join('')}</div></div></div>
      <h2 class="sec-h">Your data</h2><div class="panel">
        <button class="row" id="exp"><div class="grow"><div class="t">Back up progress</div><div class="s">Download a small file with everything you have done</div></div></button>
        <label class="row" style="cursor:pointer"><div class="grow"><div class="t">Restore from backup</div><div class="s">Use it to move to a new phone or browser</div></div><input type="file" id="imp" accept="application/json,.json" hidden></label>
        <button class="row" id="rst"><div class="grow"><div class="t" style="color:var(--bad)">Reset all progress</div></div></button></div>
      <p class="muted" style="font-size:12.5px;text-align:center;margin:22px 0 0">Fermata · ${L.lessons.length} stations · ${Object.values(L.exams).reduce((a, e) => a + Object.values(e).reduce((x, q) => x + q.length, 0), 0)} exam questions · build ${window.FERMATA_BUILD || 'dev'}</p>`;
    wireModeSeg();
    $$('[data-s]').forEach(b => b.onclick = () => { const id = b.dataset.s; const on = S.subjects.includes(id); if (on && S.subjects.length === 1) return toast('Keep at least one line'); S.subjects = on ? S.subjects.filter(x => x !== id) : [...S.subjects, id]; S.today = null; save(); $('.toggle', b).classList.toggle('on', !on); });
    $('#nm').onchange = e => { S.name = e.target.value.trim(); save(); };
    $$('#fsSeg button').forEach(b => b.onclick = () => { S.fs = +b.dataset.v; save(); $$('#fsSeg button').forEach(x => x.classList.toggle('on', x === b)); });
    $$('#thSeg button').forEach(b => b.onclick = () => { S.theme = b.dataset.v; save(); applyTheme(); $$('#thSeg button').forEach(x => x.classList.toggle('on', x === b)); });
    $$('#rtSeg button').forEach(b => b.onclick = () => { S.rate = +b.dataset.v; save(); $$('#rtSeg button').forEach(x => x.classList.toggle('on', x === b)); });
    $('#exp').onclick = () => { const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `fermata-backup-${dkey()}.json`; document.body.appendChild(a); a.click(); a.remove(); };
    $('#imp').onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(t => { const d = JSON.parse(t); if (!d || typeof d.done !== 'object') throw 0; S = Object.assign(defaults(), d); save(); toast('Progress restored'); vMe(); }).catch(() => toast('That file is not a Fermata backup')); };
    $('#rst').onclick = () => { if (confirm('Erase all progress, review cards and settings on this device?')) { const keep = { name: S.name }; S = Object.assign(defaults(), keep, { onboarded: true }); save(); toast('Progress reset'); vMe(); } };
  }
  function applyTheme() { if (S.theme === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.dataset.theme = S.theme; }

  // ---------------- router ----------------
  function go(h) { location.hash = h; }
  function route() {
    leaveReader();
    const h = location.hash.replace(/^#\/?/, '');
    const [p, a, b] = h.split('/');
    if (!S.onboarded && p !== 'welcome') return go('#/welcome');
    window.scrollTo(0, 0);
    switch (p) {
      case 'welcome': return vWelcome();
      case 'lines': return vLines();
      case 'line': return vLine(a);
      case 'read': return vRead(a);
      case 'exam': return vExam(a, b);
      case 'placement': return vPlacement(a);
      case 'review': return vReview();
      case 'news': return vNews();
      case 'me': return vMe();
      default: return vToday();
    }
  }
  addEventListener('hashchange', route);
  applyTheme(); route();

  // warm the news cache quietly in the morning so the Today teaser is fresh
  setTimeout(() => {
    const n = cachedNews();
    if (navigator.onLine && (!n || n.date !== dkey()) && location.protocol.startsWith('http')) fetch('/api/news').then(r => r.ok ? r.json() : null).then(j => { if (j && j.sections) { j._fetched = Date.now(); localStorage.setItem(NEWS_KEY, JSON.stringify(j)); if (location.hash.startsWith('#/today') || !location.hash) vToday(); } }).catch(() => { });
  }, 1200);

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('/sw.js').catch(() => { });
})();
