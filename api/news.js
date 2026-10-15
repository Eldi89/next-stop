// Fermata morning report: Vercel serverless function (Node 18+, no dependencies).
// GET /api/news  -> { date, generatedAt, brief, markets, sections, errors }
// Pulls live RSS headlines + a market snapshot, and (optionally) asks Claude to write the brief
// when the ANTHROPIC_API_KEY environment variable is set in Vercel.

const FEEDS = {
  stocks: [
    { source: 'CNBC Markets', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=20910258' },
    { source: 'MarketWatch', url: 'https://feeds.content.dowjones.io/public/rss/mw_topstories' },
    { source: 'MarketWatch Pulse', url: 'https://feeds.content.dowjones.io/public/rss/mw_marketpulse' },
    { source: 'CNBC', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114' },
    { source: 'Investing.com', url: 'https://www.investing.com/rss/news_25.rss' },
  ],
  analysis: [
    { source: 'Seeking Alpha', url: 'https://seekingalpha.com/market_currents.xml' },
    { source: 'CNBC Investing', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15839069' },
    { source: 'CNBC Earnings', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15839135' },
    { source: 'Investing.com Analysis', url: 'https://www.investing.com/rss/121899.rss' },
  ],
  learning: [
    { source: 'CFA Institute', url: 'https://blogs.cfainstitute.org/investor/feed/' },
    { source: 'A Wealth of Common Sense', url: 'https://awealthofcommonsense.com/feed/' },
    { source: 'Of Dollars And Data', url: 'https://ofdollarsanddata.com/feed/' },
    { source: 'The Irrelevant Investor', url: 'https://theirrelevantinvestor.com/feed/' },
    { source: 'CNBC Personal Finance', url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=21324812' },
    { source: 'Kiplinger', url: 'https://www.kiplinger.com/feeds/all' },
  ],
};

const SECTIONS = [
  { id: 'stocks', title: 'Stocks & markets', maxAgeDays: 2, limit: 10 },
  { id: 'analysis', title: 'Analysis & earnings', maxAgeDays: 3, limit: 8 },
  { id: 'learning', title: 'Learn something', maxAgeDays: 14, limit: 6 },
];

const MARKETS = [
  { symbol: '^GSPC', cnbc: '.SPX', name: 'S&P 500' },
  { symbol: '^IXIC', cnbc: '.IXIC', name: 'Nasdaq' },
  { symbol: '^DJI', cnbc: '.DJI', name: 'Dow Jones' },
  { symbol: '^RUT', cnbc: '.RUT', name: 'Russell 2000' },
  { symbol: '^VIX', cnbc: '.VIX', name: 'VIX (fear)' },
  { symbol: '^TNX', cnbc: 'US10Y', name: '10Y Treasury', kind: 'yield' },
  { symbol: 'FTSEMIB.MI', cnbc: '.FTMIB', name: 'FTSE MIB' },
  { symbol: 'EURUSD=X', cnbc: 'EUR=', name: 'EUR / USD', kind: 'fx' },
  { symbol: 'GC=F', cnbc: '@GC.1', name: 'Gold' },
  { symbol: 'CL=F', cnbc: '@CL.1', name: 'Oil (WTI)' },
  { symbol: 'BTC-USD', cnbc: 'BTC.CM=', name: 'Bitcoin' },
];

const num = v => { const n = parseFloat(String(v == null ? '' : v).replace(/[,%+\s]/g, '')); return isFinite(n) ? n : null; };
// Primary source: CNBC quote service (one request for all symbols). Spark lines come from Yahoo when it answers.
async function cnbcQuotes(errors) {
  const url = 'https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=' + encodeURIComponent(MARKETS.map(m => m.cnbc).join('|')) + '&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1';
  try {
    const j = JSON.parse(await get(url, 7000, { Accept: 'application/json' }));
    const list = [].concat(((j.FormattedQuoteResult || {}).FormattedQuote) || []);
    const out = {};
    for (const q of list) {
      const m = MARKETS.find(x => x.cnbc === q.symbol); if (!m) continue;
      const price = num(q.last), prev = num(q.previous_day_closing);
      let change = num(q.change); if (change == null && price != null && prev != null) change = price - prev;
      let pct = num(q.change_pct); if (pct == null && prev) pct = change / prev * 100;
      if (price != null) out[m.symbol] = { symbol: m.symbol, name: m.name, kind: m.kind || 'index', price, change: change || 0, changePct: pct || 0, spark: [] };
    }
    if (!Object.keys(out).length) errors.push('CNBC quotes: empty response');
    return out;
  } catch (e) { errors.push('CNBC quotes: ' + e.message); return {}; }
}

const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1';
let memo = null; // per-instance cache { key, at, data }

async function get(url, ms = 7000, headers = {}) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctl.signal, headers: { 'User-Agent': UA, Accept: '*/*', ...headers } });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.text();
  } finally { clearTimeout(t); }
}

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: ', ', ndash: '-', hellip: '…' };
function decode(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m);
}
const stripTags = s => decode(decode(s).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
function tag(xml, name) {
  const m = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i').exec(xml);
  return m ? m[1] : '';
}
function parseFeed(xml, source) {
  const out = [];
  const items = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) || [];
  for (const it of items) {
    const title = stripTags(tag(it, 'title'));
    let link = stripTags(tag(it, 'link'));
    if (!link) { const m = /<link[^>]*href="([^"]+)"/i.exec(it); if (m) link = decode(m[1]); }
    if (!link) link = stripTags(tag(it, 'guid'));
    const date = stripTags(tag(it, 'pubDate') || tag(it, 'published') || tag(it, 'updated') || tag(it, 'dc:date'));
    let summary = stripTags(tag(it, 'description') || tag(it, 'summary') || tag(it, 'content'));
    if (summary.length > 240) summary = summary.slice(0, 237).replace(/\s+\S*$/, '') + '…';
    const ts = Date.parse(date);
    if (title && /^https?:/.test(link)) out.push({ title, link, source, published: isNaN(ts) ? null : new Date(ts).toISOString(), summary: summary === title ? '' : summary });
  }
  return out;
}

async function loadSection(sec, errors) {
  const results = await Promise.allSettled(FEEDS[sec.id].map(f => get(f.url).then(x => parseFeed(x, f.source))));
  let items = [];
  results.forEach((r, i) => r.status === 'fulfilled' ? (items = items.concat(r.value)) : errors.push(`${FEEDS[sec.id][i].source}: ${r.reason && r.reason.message}`));
  const cutoff = Date.now() - sec.maxAgeDays * 864e5;
  const seen = new Set();
  items = items
    .filter(i => !i.published || Date.parse(i.published) > cutoff)
    .filter(i => { const k = i.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').slice(0, 60); if (seen.has(k)) return false; seen.add(k); return true; })
    .sort((a, b) => (Date.parse(b.published) || 0) - (Date.parse(a.published) || 0));
  // keep a mix of sources: max 3 per source
  const bySrc = {};
  items.forEach(i => (bySrc[i.source] = bySrc[i.source] || []).push(i));
  const queues = Object.values(bySrc).map(q => q.slice(0, 3));
  const mixed = [];
  while (mixed.length < sec.limit && queues.some(q => q.length)) queues.forEach(q => { if (q.length && mixed.length < sec.limit) mixed.push(q.shift()); });
  items = mixed.sort((a, b) => (Date.parse(b.published) || 0) - (Date.parse(a.published) || 0));
  return { id: sec.id, title: sec.title, items };
}

async function quote(m, errors) {
  let last = '';
  for (const host of ['query1', 'query2']) {
    try {
      const txt = await get(`https://${host}.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(m.symbol)}?range=1mo&interval=1d`, 6000);
      const r = JSON.parse(txt).chart.result[0];
      const closes = (r.indicators.quote[0].close || []).filter(v => v != null);
      let price = r.meta.regularMarketPrice ?? closes[closes.length - 1];
      let prev = closes.length > 1 ? closes[closes.length - 2] : r.meta.chartPreviousClose;
      if (closes.length && Math.abs(closes[closes.length - 1] - price) / price > 0.0001) prev = closes[closes.length - 1];
      let spark = closes.slice(-22);
      if (m.kind === 'yield' && price > 20) { price /= 10; prev /= 10; spark = spark.map(v => v / 10); }
      const change = price - prev;
      return { symbol: m.symbol, name: m.name, kind: m.kind || 'index', price, change, changePct: prev ? (change / prev) * 100 : 0, spark: spark.map(v => +v.toFixed(4)), currency: r.meta.currency };
    } catch (e) { last = e.message; }
  }
  if (m.symbol === '^GSPC' && errors) errors.push('Yahoo chart: ' + last);
  return null;
}

function fmtPct(p) { return (p >= 0 ? '+' : '') + p.toFixed(1) + '%'; }
function autoBrief(markets, sections) {
  const by = s => markets.find(m => m.symbol === s);
  const spx = by('^GSPC'), ndx = by('^IXIC'), vix = by('^VIX'), tnx = by('^TNX');
  let headline = 'Your morning market report';
  if (spx) {
    const dir = spx.changePct > 0.15 ? 'Stocks rose' : spx.changePct < -0.15 ? 'Stocks fell' : 'Stocks were flat';
    headline = `${dir} in the last session: S&P 500 ${fmtPct(spx.changePct)}` + (ndx ? `, Nasdaq ${fmtPct(ndx.changePct)}` : '');
  }
  const top = (sections.find(s => s.id === 'stocks') || { items: [] }).items.slice(0, 3).map(i => i.title);
  const watch = [];
  if (vix) watch.push(`Fear gauge (VIX) at ${vix.price.toFixed(1)}: ${vix.price < 15 ? 'calm markets' : vix.price < 25 ? 'normal nerves' : 'investors are nervous'}.`);
  if (tnx) watch.push(`10-year Treasury yield at ${tnx.price.toFixed(2)}% (${tnx.change >= 0 ? 'up' : 'down'} ${Math.abs(tnx.change * 100).toFixed(0)} bp): higher yields usually pressure growth stocks.`);
  const oil = by('CL=F'); if (oil) watch.push(`Oil ${fmtPct(oil.changePct)} at $${oil.price.toFixed(2)}: watch energy stocks and inflation talk.`);
  return { source: 'auto', headline, bullets: top, watch, learn: null };
}

async function aiBrief(markets, sections) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  const mk = markets.map(m => `${m.name}: ${m.kind === 'yield' ? m.price.toFixed(2) + '%' : m.price.toFixed(2)} (${fmtPct(m.changePct)})`).join('\n');
  const hd = sections.map(s => `## ${s.title}\n` + s.items.map(i => `- ${i.title} (${i.source})${i.summary ? ': ' + i.summary : ''}`).join('\n')).join('\n\n');
  const prompt = `You write a short, calm morning market report for a busy accountant learning to invest, read on the subway in 3 minutes. Use only the data below, invent nothing, no buy/sell advice, simple English, no dashes as punctuation.\n\nMARKETS (last close vs previous):\n${mk}\n\nHEADLINES:\n${hd}\n\nReturn ONLY JSON: {"headline":"one sentence summary of the morning (max 120 chars)","bullets":["3 or 4 short bullets on what matters and why, each max 160 chars"],"watch":["2 or 3 things to watch today, each max 130 chars"],"learn":{"concept":"one finance concept these headlines illustrate","explanation":"2 simple sentences explaining it with today's news as the example"}}`;
  try {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 20000);
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', signal: ctl.signal,
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || 'claude-haiku-5-5', max_tokens: 1000, messages: [{ role: 'user', content: prompt }] }),
    });
    clearTimeout(t);
    if (!r.ok) throw new Error('Claude API HTTP ' + r.status);
    const j = await r.json();
    const text = (j.content || []).map(c => c.text || '').join('');
    const json = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
    return { source: 'ai', headline: json.headline, bullets: json.bullets || [], watch: json.watch || [], learn: json.learn || null };
  } catch (e) { return { error: e.message }; }
}

async function build() {
  const errors = [];
  const [sections, quotes] = await Promise.all([
    Promise.all(SECTIONS.map(s => loadSection(s, errors))),
    Promise.all([cnbcQuotes(errors), Promise.all(MARKETS.map(m => quote(m, errors)))]),
  ]);
  const [cn, yh] = quotes;
  const markets = MARKETS.map((m, i) => {
    const a = cn[m.symbol], b = yh[i];
    if (a) { if (b && b.spark && b.spark.length) a.spark = b.spark; return a; }
    return b;
  }).filter(Boolean);
  if (markets.length < MARKETS.length) errors.push(`market data: ${MARKETS.length - markets.length} of ${MARKETS.length} quotes unavailable`);
  let brief = await aiBrief(markets, sections);
  if (!brief || brief.error) { if (brief && brief.error) errors.push(brief.error); brief = autoBrief(markets, sections); }
  const now = new Date();
  const date = now.toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
  return { date, generatedAt: now.toISOString(), brief, markets, sections, errors };
}

module.exports = async (req, res) => {
  try {
    const url = new URL(req.url, 'http://x');
    const fresh = url.searchParams.has('fresh') || url.searchParams.has('warm');
    const key = new Date().toISOString().slice(0, 13); // hourly bucket
    if (!fresh && memo && memo.key === key) return send(res, memo.data);
    const data = await build();
    memo = { key, data };
    return send(res, data);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ error: e.message }));
  }
};
function send(res, data) {
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'public, s-maxage=1800, stale-while-revalidate=43200');
  res.end(JSON.stringify(data));
}
module.exports._test = { parseFeed, autoBrief, decode };
