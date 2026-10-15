/* Fermata figure renderer: turns figure data into clean HTML/SVG using the lesson's line color (CSS var --c). */
const FIG = (() => {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[\s(])_(.+?)_(?=[\s.,;:!?)]|$)/g, '$1<i>$2</i>');
  const tone = i => [`var(--c)`, `color-mix(in srgb, var(--c) 62%, var(--ink))`, `color-mix(in srgb, var(--c) 45%, var(--surface))`, `var(--ink-3)`, `color-mix(in srgb, var(--c) 25%, var(--surface))`, `color-mix(in srgb, var(--ink) 55%, var(--surface))`][i % 6];
  const ops = new Set(['=', '+', '−', '-', '×', '÷', '→', '≈', '<', '>', '≥', '≤']);

  function fmt(v, unit) {
    if (typeof v !== 'number') return esc(v);
    const a = Math.abs(v), neg = v < 0 ? '−' : '';
    let n;
    if (a >= 1e9) n = (a / 1e9).toFixed(a >= 1e10 ? 0 : 1) + 'B';
    else if (a >= 1e6) n = (a / 1e6).toFixed(a >= 1e7 ? 0 : 1) + 'M';
    else if (a >= 1e5) n = Math.round(a / 1e3) + 'k';
    else if (a >= 1e4) n = (+(a / 1e3).toFixed(1)) + 'k';
    else n = a.toLocaleString('en-US', { maximumFractionDigits: a < 10 ? 2 : a < 100 ? 1 : 0 });
    if (unit === '$' || unit === '€') return neg + unit + n;
    if (unit === '%') return neg + n + '%';
    return neg + n + (unit ? ' ' + esc(unit) : '');
  }
  const cap = f => f.caption ? `<figcaption>${md(f.caption)}</figcaption>` : '';
  const wrap = (f, inner, cls = '') => `<figure class="fig fig-${f.kind} ${cls}">${inner}${cap(f)}</figure>`;

  const R = {
    flow(f) {
      const steps = f.steps || [];
      if (steps.length <= 3) {
        return wrap(f, `<div class="flow-h">${steps.map((s, i) => `${i ? '<div class="flow-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h14m-5-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : ''}<div class="flow-step">${s.icon ? `<div class="flow-ic">${esc(s.icon)}</div>` : ''}<div class="flow-lb">${esc(s.label)}</div>${s.note ? `<div class="flow-nt">${esc(s.note)}</div>` : ''}</div>`).join('')}</div>`);
      }
      return wrap(f, `<ol class="flow-v">${steps.map(s => `<li><span class="flow-dot"></span><div>${s.icon ? `<span class="flow-ic-s">${esc(s.icon)}</span>` : ''}<b>${esc(s.label)}</b>${s.note ? `<span class="flow-nt">${esc(s.note)}</span>` : ''}</div></li>`).join('')}</ol>`);
    },
    equation(f) {
      return wrap(f, `<div class="eq">${(f.parts || []).map(p => ops.has(String(p).trim()) ? `<span class="eq-op">${esc(p)}</span>` : `<span class="eq-term">${esc(p)}</span>`).join('')}</div>`);
    },
    bars(f) {
      const d = f.data || [], u = f.unit || '';
      const max = Math.max(...d.map(x => Math.abs(x.value)), 1e-9);
      const neg = d.some(x => x.value < 0);
      const long = d.length > 5 || d.some(x => String(x.label).length > 9);
      if (neg || long) {
        const mn = Math.min(0, ...d.map(x => x.value)), mx = Math.max(0, ...d.map(x => x.value)), span = (mx - mn) || 1;
        const zero = (-mn / span) * 100;
        return wrap(f, `<div class="hbars">${d.map((x, i) => {
          const w = Math.abs(x.value) / span * 100, left = x.value < 0 ? zero - w : zero;
          return `<div class="hbar-row"><div class="hbar-lb">${esc(x.label)}</div><div class="hbar-track">${neg ? `<span class="hbar-zero" style="left:${zero}%"></span>` : ''}<span class="hbar ${x.highlight ? 'hl' : ''} ${x.value < 0 ? 'neg' : ''}" style="left:${left}%;width:${Math.max(w, .6)}%;--d:${i * 60}ms"></span></div><div class="hbar-v">${fmt(x.value, u)}</div></div>`;
        }).join('')}</div>`);
      }
      const anyHl = d.some(x => x.highlight);
      return wrap(f, `<div class="vbars" style="--n:${d.length}">${d.map((x, i) => `<div class="vbar-col"><div class="vbar-v">${fmt(x.value, u)}</div><div class="vbar-track"><span class="vbar ${x.highlight || (!anyHl && i === d.length - 1) ? 'hl' : ''}" style="height:${Math.max(x.value / max * 100, 1.5)}%;--d:${i * 70}ms"></span></div><div class="vbar-lb">${esc(x.label)}</div></div>`).join('')}</div>`);
    },
    line(f) {
      const W = 340, H = 210, pl = 46, pr = 14, pt = 16, pb = 30;
      const S = f.series || [], xl = f.xLabels || [], u = f.unit || '';
      const all = S.flatMap(s => s.points);
      let mn = Math.min(...all), mx = Math.max(...all);
      if (mn > 0 && mn / (mx || 1) < 0.6) mn = 0;
      if (mx === mn) { mx += 1; mn -= 1; }
      const pad = (mx - mn) * 0.08; mx += pad; if (mn !== 0) mn -= pad;
      const n = xl.length;
      const X = i => pl + (n <= 1 ? 0 : i * (W - pl - pr) / (n - 1));
      const Y = v => pt + (1 - (v - mn) / (mx - mn)) * (H - pt - pb);
      let g = '';
      for (let k = 0; k <= 4; k++) {
        const v = mn + (mx - mn) * k / 4, y = Y(v);
        g += `<line x1="${pl}" x2="${W - pr}" y1="${y}" y2="${y}" class="gl"/><text x="${pl - 6}" y="${y + 4}" class="yt">${fmt(+v.toPrecision(3), u)}</text>`;
      }
      const step = Math.ceil(n / 6);
      xl.forEach((l, i) => { if (i % step === 0 || i === n - 1) g += `<text x="${X(i)}" y="${H - 9}" class="xt">${esc(l)}</text>`; });
      S.forEach((s, si) => {
        const pts = s.points.map((v, i) => `${X(i).toFixed(1)},${Y(v).toFixed(1)}`);
        if (S.length === 1) g += `<path d="M${pts[0]} L${pts.join(' L')} L${X(n - 1)},${Y(Math.max(mn, 0))} L${X(0)},${Y(Math.max(mn, 0))}Z" class="area"/>`;
        g += `<path d="M${pts.join(' L')}" class="ln" style="stroke:${tone(si)};${si ? 'stroke-dasharray:' + (si === 1 ? '6 4' : '2 4') : ''}"/>`;
        const last = s.points[s.points.length - 1];
        g += `<circle cx="${X(n - 1)}" cy="${Y(last)}" r="4" style="fill:${tone(si)}"/>`;
      });
      const legend = S.length > 1 || (S[0] && S[0].name) ? `<div class="legend">${S.map((s, i) => `<span><i style="background:${tone(i)}"></i>${esc(s.name)}: <b>${fmt(s.points[s.points.length - 1], u)}</b></span>`).join('')}</div>` : '';
      return wrap(f, `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img">${g}</svg>${legend}`);
    },
    donut(f) {
      const d = f.data || [], tot = d.reduce((a, x) => a + x.value, 0) || 1;
      const r = 54, C = 2 * Math.PI * r; let off = 0;
      const arcs = d.map((x, i) => { const len = x.value / tot * C; const s = `<circle r="${r}" cx="80" cy="80" fill="none" stroke-width="26" style="stroke:${tone(i)}" stroke-dasharray="${Math.max(len - 1.5, 0.1)} ${C}" stroke-dashoffset="${-off}" transform="rotate(-90 80 80)"/>`; off += len; return s; }).join('');
      return wrap(f, `<div class="donut"><svg viewBox="0 0 160 160">${arcs}${f.center ? `<text x="80" y="85" class="dc">${esc(f.center)}</text>` : ''}</svg><ul>${d.map((x, i) => `<li><i style="background:${tone(i)}"></i><span>${esc(x.label)}</span><b>${Math.round(x.value / tot * 100)}%</b></li>`).join('')}</ul></div>`);
    },
    compare(f) {
      const side = s => `<div class="cmp-side"><div class="cmp-h">${s.icon ? `<span>${esc(s.icon)}</span>` : ''}${esc(s.title)}</div><ul>${(s.items || []).map(i => `<li>${md(i)}</li>`).join('')}</ul></div>`;
      return wrap(f, `<div class="cmp">${side(f.left || {})}<div class="cmp-vs">vs</div>${side(f.right || {})}</div>`);
    },
    stack(f) {
      const cols = f.columns || [], u = f.unit || '';
      const max = Math.max(...cols.map(c => c.blocks.reduce((a, b) => a + b.value, 0)), 1e-9);
      let k = 0;
      return wrap(f, `<div class="stack">${cols.map(c => { const tot = c.blocks.reduce((a, b) => a + b.value, 0); return `<div class="stk-col"><div class="stk-bar" style="height:${tot / max * 100}%">${c.blocks.map(b => { const h = b.value / tot * 100; const col = tone(k++); return `<div class="stk-b" style="flex:${b.value} 0 0;background:${col}"><span>${esc(b.label)}<b>${fmt(b.value, u)}</b></span></div>`; }).join('')}</div><div class="stk-t">${esc(c.title)}<b>${fmt(tot, u)}</b></div></div>`; }).join(cols.length === 2 ? '<div class="stk-eq">=</div>' : '')}</div>`);
    },
    cycle(f) {
      const s = f.steps || [], n = s.length, W = 340, H = 270, cx = 170, cy = 135, r = 82;
      let g = `<circle cx="${cx}" cy="${cy}" r="${r}" class="cyc-ring"/>`;
      s.forEach((lb, i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
        const am = a + Math.PI / n, ax = cx + r * Math.cos(am), ay = cy + r * Math.sin(am), deg = am * 180 / Math.PI + 90;
        g += `<path d="M-5,-5 L4,0 L-5,5" transform="translate(${ax},${ay}) rotate(${deg - 90 + 90})" class="cyc-arr"/>`;
        g += `<circle cx="${x}" cy="${y}" r="15" class="cyc-node"/><text x="${x}" y="${y + 5}" class="cyc-n">${i + 1}</text>`;
        const lx = cx + (r + 28) * Math.cos(a), ly = cy + (r + 28) * Math.sin(a) + 4;
        const anchor = Math.abs(Math.cos(a)) < 0.3 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end';
        const dy = Math.abs(Math.cos(a)) < 0.3 ? (Math.sin(a) < 0 ? -6 : 10) : 0;
        g += `<text x="${lx}" y="${ly + dy}" text-anchor="${anchor}" class="cyc-lb">${esc(lb)}</text>`;
      });
      if (f.center) g += `<text x="${cx}" y="${cy + 5}" class="cyc-c">${esc(f.center)}</text>`;
      return wrap(f, `<svg viewBox="0 0 ${W} ${H}" class="chart">${g}</svg>`);
    },
    pyramid(f) {
      const L = f.levels || [], n = L.length;
      return wrap(f, `<div class="pyr">${L.map((l, i) => `<div class="pyr-l" style="width:${38 + 62 * (i + 1) / n}%;background:${`color-mix(in srgb, var(--c) ${100 - i * (60 / n)}%, var(--surface))`};color:${i < n / 2 ? '#fff' : 'var(--ink)'}">${esc(l)}</div>`).join('')}</div>`);
    },
    matrix(f) {
      const c = f.cells || [];
      return wrap(f, `<div class="mtx"><div class="mtx-y">${esc(f.yAxis || '')}</div><div class="mtx-grid">${c.map((x, i) => `<div class="mtx-c ${i === 0 ? 'hl' : ''}"><b>${esc(x.title)}</b><span>${esc(x.note || '')}</span></div>`).join('')}</div><div class="mtx-x">${esc(f.xAxis || '')}</div></div>`);
    },
    timeline(f) {
      return wrap(f, `<ol class="tl">${(f.events || []).map(e => `<li><span class="tl-dot"></span><span class="tl-w">${esc(e.when)}</span><span class="tl-l">${md(e.label)}</span></li>`).join('')}</ol>`);
    },
    stat(f) {
      return wrap(f, `<div class="stat">${(f.items || []).map(s => `<div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join('')}</div>`);
    },
    scale(f) {
      const t = f.tilt === 'left' ? -9 : f.tilt === 'right' ? 9 : 0;
      const L = f.left || {}, Rr = f.right || {};
      const dy = Math.sin(t * Math.PI / 180) * 110;
      const pan = (x, y, cls) => `<path d="M${x} ${y} L${x - 36} ${y + 46} M${x} ${y} L${x + 36} ${y + 46}" class="sc-str"/><path d="M${x - 44} ${y + 46} Q${x} ${y + 72} ${x + 44} ${y + 46} Z" class="sc-pan ${cls}"/>`;
      return wrap(f, `<svg viewBox="0 0 340 168" class="chart scale-svg"><path d="M170 40 L170 150 M128 152 H212" class="sc-stand"/><line x1="60" y1="${40 - dy}" x2="280" y2="${40 + dy}" class="sc-beam"/><circle cx="170" cy="40" r="7" class="sc-pivot"/>
        ${pan(60, 40 - dy, 'l')}${pan(280, 40 + dy, 'r')}
        <text x="60" y="${40 - dy + 88}" class="sc-lb">${esc(L.label)}</text><text x="280" y="${40 + dy + 88}" class="sc-lb">${esc(Rr.label)}</text></svg>
        <div class="sc-items"><ul>${(L.items || []).map(i => `<li>${md(i)}</li>`).join('')}</ul><ul>${(Rr.items || []).map(i => `<li>${md(i)}</li>`).join('')}</ul></div>`);
    },
    spectrum(f) {
      const it = (f.items || []).slice().sort((a, b) => a.pos - b.pos);
      return wrap(f, `<div class="spec"><div class="spec-row up">${it.map((x, i) => i % 2 ? '' : `<span style="left:${x.pos}%;transform:translateX(-${x.pos}%)">${esc(x.label)}</span>`).join('')}</div><div class="spec-bar">${it.map(x => `<i style="left:${x.pos}%"></i>`).join('')}</div><div class="spec-row dn">${it.map((x, i) => i % 2 ? `<span style="left:${x.pos}%;transform:translateX(-${x.pos}%)">${esc(x.label)}</span>` : '').join('')}</div><div class="spec-ends"><span>${esc(f.left)}</span><span>${esc(f.right)}</span></div></div>`);
    },
    table(f) {
      return wrap(f, `<div class="tbl-wrap"><table class="tbl"><thead><tr>${(f.head || []).map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${(f.rows || []).map(r => `<tr>${r.map(c => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
    },
    taccount(f) {
      const u = f.unit || '$', D = f.debits || [], C = f.credits || [];
      const sd = D.reduce((a, x) => a + x.value, 0), sc = C.reduce((a, x) => a + x.value, 0), bal = sd - sc;
      const rows = (arr) => arr.map(x => `<div class="ta-r"><span>${esc(x.label)}</span><b>${fmt(x.value, u)}</b></div>`).join('');
      return wrap(f, `<div class="ta"><div class="ta-t">${esc(f.title)}</div><div class="ta-body"><div class="ta-side"><div class="ta-h">Debit</div>${rows(D)}</div><div class="ta-side"><div class="ta-h">Credit</div>${rows(C)}</div></div>${D.length && C.length || bal ? `<div class="ta-bal ${bal >= 0 ? 'dr' : 'cr'}"><span>Balance</span><b>${fmt(Math.abs(bal), u)} ${bal >= 0 ? 'Dr' : 'Cr'}</b></div>` : ''}</div>`);
    },
    grid(f) {
      const it = f.items || [];
      return wrap(f, `<div class="grid g${it.length === 4 || it.length === 2 ? 2 : 3}">${it.map(x => `<div><span class="g-ic">${esc(x.icon || '')}</span><b>${esc(x.label)}</b>${x.note ? `<span>${esc(x.note)}</span>` : ''}</div>`).join('')}</div>`);
    },
    breath(f) {
      const p = encodeURIComponent(JSON.stringify(f.pattern || []));
      const tot = (f.pattern || []).reduce((a, x) => a + x.secs, 0);
      return wrap(f, `<div class="breath" data-pattern="${p}"><div class="br-stage"><div class="br-circle"></div><div class="br-text"><b>Tap</b><span>to begin</span></div></div><div class="br-pat">${(f.pattern || []).map(x => `${esc(x.label)} ${x.secs}s`).join(' · ')} · ${tot}s per round</div></div>`);
    },
    chat(f) {
      return wrap(f, `<div class="chat">${(f.messages || []).map(m => `<div class="msg ${m.role}"><span class="who">${m.role === 'you' ? 'You' : 'AI'}</span><div>${md(m.text).replace(/\n/g, '<br>')}</div></div>`).join('')}</div>`);
    },
  };

  function render(f) {
    try { return (R[f.kind] || (() => ''))(f); } catch (e) { console.warn('figure', f, e); return ''; }
  }

  // Breathing guide: tap to start / stop
  function wireBreath(root) {
    root.querySelectorAll('.breath').forEach(el => {
      if (el._wired) return; el._wired = true;
      const pat = JSON.parse(decodeURIComponent(el.dataset.pattern));
      const circle = el.querySelector('.br-circle'), txt = el.querySelector('.br-text'), pat_ = el.querySelector('.br-pat'), patTxt = pat_.textContent;
      let timer = null, idx = 0, left = 0, round = 0, scale = 0.55;
      function phase() {
        const p = pat[idx % pat.length];
        if (/in/i.test(p.label) && !/hold/i.test(p.label)) scale = 1; else if (/out|ex|release/i.test(p.label)) scale = 0.55;
        circle.style.transition = `transform ${p.secs}s ease-in-out`;
        circle.style.transform = `scale(${scale})`;
        left = p.secs;
        txt.innerHTML = `<b>${esc(p.label)}</b><span>${left}</span>`; pat_.textContent = `Round ${round + 1} · tap to stop`;
      }
      function tick() {
        left--;
        if (left <= 0) { idx++; if (idx % pat.length === 0) round++; if (navigator.vibrate) navigator.vibrate(15); phase(); return; }
        const p = pat[idx % pat.length];
        txt.innerHTML = `<b>${esc(p.label)}</b><span>${left}</span>`;
      }
      el.addEventListener('click', () => {
        if (timer) { clearInterval(timer); timer = null; circle.style.transform = 'scale(.55)'; txt.innerHTML = `<b>${round}</b><span>round${round === 1 ? '' : 's'}</span>`; pat_.textContent = patTxt + ' · tap to go again'; return; }
        idx = 0; round = 0; phase(); timer = setInterval(tick, 1000);
      });
    });
  }
  return { render, wireBreath, md, esc, fmt };
})();
