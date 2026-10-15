#!/usr/bin/env node
// Validates Fermata content files. Usage: node validate.js <subject|all> [--quiet]
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'content');
const SUBJECTS = { finance: 'fin', accounting: 'acc', investing: 'inv', stocks: 'stk', ai: 'ai', self: 'self', inner: 'inner' };
const PLAN = { L1: { level: 1, count: 5 }, L2: { level: 2, count: 4 }, L3: { level: 3, count: 3 } };
const BLOCKS = ['p', 'h', 'key', 'list', 'example', 'fig', 'term', 'check', 'tip', 'warn', 'quote', 'chapter', 'exercise'];
const FIGS = ['flow', 'equation', 'bars', 'line', 'donut', 'compare', 'stack', 'cycle', 'pyramid', 'matrix', 'timeline', 'stat', 'scale', 'spectrum', 'table', 'taccount', 'grid', 'breath', 'chat'];

let errors = 0, warnings = 0;
const quiet = process.argv.includes('--quiet');
function err(f, m) { errors++; console.log(`  ERROR  ${f}: ${m}`); }
function warn(f, m) { warnings++; console.log(`  WARN   ${f}: ${m}`); }

function parseFile(file, fn) {
  const raw = fs.readFileSync(file, 'utf8').trim();
  const pre = fn + '(';
  if (!raw.startsWith(pre) || !raw.endsWith(');')) { err(path.basename(file), `must start with "${pre}" and end with ");"`); return null; }
  const body = raw.slice(pre.length, -2);
  try { return JSON.parse(body); } catch (e) {
    const m = /position (\d+)/.exec(e.message); let ctx = '';
    if (m) { const p = +m[1]; ctx = ' near: ' + JSON.stringify(body.slice(Math.max(0, p - 80), p + 40)); }
    err(path.basename(file), 'invalid JSON: ' + e.message + ctx); return null;
  }
}

const strip = s => String(s || '').replace(/[*_`]/g, '');
const wc = s => (strip(s).match(/[A-Za-z0-9€$%’'.,]+/g) || []).length;
function blockWords(b) {
  switch (b.t) {
    case 'p': case 'h': case 'key': case 'tip': case 'warn': return wc(b.text);
    case 'quote': return wc(b.text);
    case 'list': return (b.items || []).reduce((a, i) => a + wc(i), 0);
    case 'example': return wc(b.title) + wc(b.text);
    case 'term': return wc(b.word) + wc(b.def);
    case 'check': return wc(b.q) + wc(b.a);
    case 'chapter': return wc(b.title);
    case 'exercise': return wc(b.title) + wc(b.prompt) + (b.steps || []).reduce((a, i) => a + wc(i), 0) + wc(b.answer);
    case 'fig': return wc(b.caption) + figWords(b);
    default: return 0;
  }
}
function figWords(f) {
  let s = '';
  const add = x => { if (x != null) s += ' ' + x; };
  (f.steps || []).forEach(x => typeof x === 'string' ? add(x) : (add(x.label), add(x.note)));
  ['left', 'right'].forEach(k => { if (f[k] && typeof f[k] === 'object') { add(f[k].title); add(f[k].label); (f[k].items || []).forEach(add); } });
  (f.cells || []).forEach(c => { add(c.title); add(c.note); });
  (f.events || []).forEach(e => { add(e.when); add(e.label); });
  (f.items || []).forEach(i => { if (typeof i === 'object') { add(i.label); add(i.note); add(i.value); } });
  (f.messages || []).forEach(m => add(m.text));
  (f.rows || []).forEach(r => r.forEach(add));
  (f.levels || []).forEach(add);
  return wc(s);
}

function checkFig(f, where) {
  const k = f.kind;
  if (!FIGS.includes(k)) return err(where, `unknown figure kind "${k}"`);
  if (!f.caption) warn(where, `figure ${k} has no caption`);
  const arr = (v, lo, hi, name) => { if (!Array.isArray(v)) return err(where, `${k}.${name} must be an array`), false; if (v.length < lo || v.length > hi) err(where, `${k}.${name} needs ${lo}-${hi} items (has ${v.length})`); return true; };
  const num = (v, name) => { if (typeof v !== 'number' || !isFinite(v)) err(where, `${k}: ${name} must be a number (got ${JSON.stringify(v)})`); };
  switch (k) {
    case 'flow': if (arr(f.steps, 2, 5, 'steps')) f.steps.forEach(s => { if (!s.label) err(where, 'flow step needs label'); }); break;
    case 'equation': arr(f.parts, 3, 9, 'parts'); break;
    case 'bars': if (arr(f.data, 2, 8, 'data')) f.data.forEach(d => { if (!d.label) err(where, 'bar needs label'); num(d.value, 'bar value'); }); break;
    case 'line':
      if (arr(f.series, 1, 3, 'series')) {
        const n = (f.xLabels || []).length; if (!n) err(where, 'line needs xLabels');
        f.series.forEach(s => { if (arr(s.points, 3, 30, 'points')) { if (s.points.length !== n) err(where, `line series "${s.name}" has ${s.points.length} points but ${n} xLabels`); s.points.forEach(p => num(p, 'point')); } });
      } break;
    case 'donut': if (arr(f.data, 2, 6, 'data')) f.data.forEach(d => num(d.value, 'slice value')); break;
    case 'compare': ['left', 'right'].forEach(s => { if (!f[s] || !f[s].title) err(where, `compare.${s}.title missing`); else arr(f[s].items, 1, 5, s + '.items'); }); break;
    case 'stack': if (arr(f.columns, 1, 3, 'columns')) f.columns.forEach(c => { if (arr(c.blocks, 1, 5, 'blocks')) c.blocks.forEach(b => num(b.value, 'block value')); }); break;
    case 'cycle': arr(f.steps, 3, 6, 'steps'); if ((f.steps || []).some(s => typeof s !== 'string')) err(where, 'cycle steps must be strings'); break;
    case 'pyramid': arr(f.levels, 3, 5, 'levels'); break;
    case 'matrix': arr(f.cells, 4, 4, 'cells'); break;
    case 'timeline': arr(f.events, 2, 7, 'events'); break;
    case 'stat': arr(f.items, 1, 3, 'items'); break;
    case 'scale': ['left', 'right'].forEach(s => { if (!f[s] || !f[s].label) err(where, `scale.${s}.label missing`); }); if (!['left', 'right', 'even'].includes(f.tilt)) err(where, 'scale.tilt must be left/right/even'); break;
    case 'spectrum': if (arr(f.items, 2, 7, 'items')) f.items.forEach(i => { num(i.pos, 'pos'); if (i.pos < 0 || i.pos > 100) err(where, 'spectrum pos must be 0-100'); }); if (!f.left || !f.right) err(where, 'spectrum needs left and right'); break;
    case 'table': if (arr(f.head, 2, 4, 'head') && arr(f.rows, 1, 8, 'rows')) f.rows.forEach(r => { if (!Array.isArray(r) || r.length !== f.head.length) err(where, 'table row length must equal head length'); }); break;
    case 'taccount': if (!f.title) err(where, 'taccount needs title'); ['debits', 'credits'].forEach(s => { if (!Array.isArray(f[s])) err(where, `taccount.${s} must be array`); else f[s].forEach(x => num(x.value, s + ' value')); }); break;
    case 'grid': arr(f.items, 2, 6, 'items'); break;
    case 'breath': if (arr(f.pattern, 2, 5, 'pattern')) f.pattern.forEach(p => num(p.secs, 'secs')); break;
    case 'chat': if (arr(f.messages, 2, 6, 'messages')) f.messages.forEach(m => { if (!['you', 'ai'].includes(m.role)) err(where, 'chat role must be you/ai'); }); break;
  }
}

function checkQ(q, where) {
  if (!q || typeof q.q !== 'string') return err(where, 'question missing q');
  if (!Array.isArray(q.options) || q.options.length !== 4) err(where, `question needs 4 options: "${q.q.slice(0, 50)}"`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) err(where, `answer index invalid: "${q.q.slice(0, 50)}"`);
  if (!q.why) warn(where, `question has no why: "${q.q.slice(0, 50)}"`);
}

function dashCheck(obj, where) {
  const s = JSON.stringify(obj);
  const n = (s.match(/[—–]/g) || []).length;
  if (n) warn(where, `${n} em/en dash characters found; replace with commas, colons or periods`);
}

function checkLesson(L, file, expect) {
  const where = `${file} ${L.id || '?'}`;
  ['id', 'subject', 'level', 'order', 'type', 'minutes', 'title', 'hook', 'tags', 'blocks', 'takeaways', 'quiz'].forEach(k => { if (L[k] == null) err(where, `missing field ${k}`); });
  if (L.subject !== expect.subject) err(where, `subject should be ${expect.subject}`);
  if (expect.level && L.level !== expect.level) err(where, `level should be ${expect.level}`);
  if (expect.type && L.type !== expect.type) err(where, `type should be ${expect.type}`);
  if (!Array.isArray(L.blocks)) return;
  const counts = {}; let figs = 0, words = 0;
  L.blocks.forEach((b, i) => {
    if (!BLOCKS.includes(b.t)) err(where, `block ${i} unknown type "${b.t}"`);
    counts[b.t] = (counts[b.t] || 0) + 1;
    if (b.t === 'fig') { figs++; checkFig(b, `${where} block ${i}`); }
    if (b.t === 'check' && (!b.q || !b.a)) err(where, `check block ${i} needs q and a`);
    if (b.t === 'exercise' && (!b.prompt || !b.answer)) err(where, `exercise block ${i} needs prompt and answer`);
    if ((b.t === 'p' || b.t === 'key' || b.t === 'tip' || b.t === 'warn') && !b.text) err(where, `${b.t} block ${i} has no text`);
    words += blockWords(b);
  });
  (L.quiz || []).forEach(q => checkQ(q, where));
  if ((L.tags || []).length < 3) warn(where, 'needs 3-8 tags');
  dashCheck(L, where);
  const nq = (L.quiz || []).length, nt = (L.takeaways || []).length;
  if (L.type === 'short') {
    if (words < 550 || words > 850) warn(where, `short lesson has ${words} words (target 550-850)`);
    if (figs < 2) err(where, `needs at least 2 figures (has ${figs})`);
    if (counts.key !== 1) err(where, `needs exactly 1 key block (has ${counts.key || 0})`);
    if (!counts.example) err(where, 'needs at least 1 example');
    if (!counts.check) err(where, 'needs at least 1 check');
    if (counts.tip !== 1) err(where, `needs exactly 1 tip (has ${counts.tip || 0})`);
    if (counts.chapter || counts.exercise) err(where, 'short lessons cannot have chapter/exercise blocks');
    if (nq !== 3) err(where, `needs exactly 3 quiz questions (has ${nq})`);
    if (nt !== 3) err(where, `needs exactly 3 takeaways (has ${nt})`);
  } else {
    const d2 = /-d2$/.test(L.id);
    const [wlo, whi, clo, chi, fmin, emin, q, t] = d2 ? [7000, 9500, 7, 9, 12, 5, 10, 5] : [4200, 6000, 5, 6, 8, 3, 8, 4];
    if (words < wlo || words > whi) warn(where, `deep dive has ${words} words (target ${wlo}-${whi})`);
    if ((counts.chapter || 0) < clo || (counts.chapter || 0) > chi) err(where, `needs ${clo}-${chi} chapters (has ${counts.chapter || 0})`);
    if (L.blocks[0] && L.blocks[0].t !== 'chapter') err(where, 'first block of a deep dive must be a chapter');
    if (figs < fmin) err(where, `needs at least ${fmin} figures (has ${figs})`);
    if ((counts.exercise || 0) < emin) err(where, `needs at least ${emin} exercises (has ${counts.exercise || 0})`);
    if (nq !== q) err(where, `needs exactly ${q} quiz questions (has ${nq})`);
    if (nt !== t) err(where, `needs exactly ${t} takeaways (has ${nt})`);
  }
  if (!quiet) console.log(`  ok     ${where}: ${words} words, ${figs} figs, ${nq} quiz`);
  return words;
}

function validateSubject(subject) {
  const prefix = SUBJECTS[subject];
  if (!prefix) { console.log('Unknown subject ' + subject); process.exit(2); }
  console.log(`\n== ${subject} ==`);
  const ids = new Set();
  let total = 0;
  for (const part of ['L1', 'L2', 'L3', 'D1', 'D2']) {
    const file = path.join(DIR, `${subject}-${part}.js`);
    const fname = path.basename(file);
    if (!fs.existsSync(file)) { warn(fname, 'file missing'); continue; }
    const data = parseFile(file, 'LEARN.add'); if (!data) continue;
    if (data.subject !== subject) err(fname, `subject must be "${subject}"`);
    const lessons = data.lessons || [];
    if (PLAN[part]) {
      if (lessons.length !== PLAN[part].count) err(fname, `needs ${PLAN[part].count} lessons (has ${lessons.length})`);
      lessons.forEach(L => { if (!String(L.id).startsWith(`${prefix}-${PLAN[part].level}-`)) err(fname, `id ${L.id} should start with ${prefix}-${PLAN[part].level}-`); total += checkLesson(L, fname, { subject, level: PLAN[part].level, type: 'short' }) || 0; });
    } else {
      if (lessons.length !== 1) err(fname, 'deep dive file must contain exactly 1 lesson');
      const lvl = part === 'D1' ? 1 : 3;
      lessons.forEach(L => { if (L.id !== `${prefix}-${part.toLowerCase()}`) err(fname, `id should be ${prefix}-${part.toLowerCase()}`); total += checkLesson(L, fname, { subject, level: lvl, type: 'deep' }) || 0; });
    }
    lessons.forEach(L => { if (ids.has(L.id)) err(fname, 'duplicate id ' + L.id); ids.add(L.id); });
  }
  const ef = path.join(DIR, `${subject}-exams.js`);
  if (!fs.existsSync(ef)) warn(path.basename(ef), 'file missing');
  else {
    const data = parseFile(ef, 'LEARN.addExams');
    if (data) {
      ['1', '2', '3'].forEach(l => { const qs = (data.exams || {})[l]; if (!Array.isArray(qs) || qs.length !== 10) err(path.basename(ef), `level ${l} needs 10 questions`); else qs.forEach(q => checkQ(q, `${path.basename(ef)} L${l}`)); });
      dashCheck(data, path.basename(ef));
    }
  }
  console.log(`  total words: ${total}`);
}

const arg = process.argv[2];
if (!arg) { console.log('usage: node validate.js <subject|all>'); process.exit(2); }
(arg === 'all' ? Object.keys(SUBJECTS) : [arg]).forEach(validateSubject);
console.log(`\n${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
