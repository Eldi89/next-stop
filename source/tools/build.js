// Builds dist/: one self-contained index.html (styles, lessons, app), plus sw.js, manifest, icons, api/news.js, vercel.json
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), src = p => path.join(root, 'src', p), out = path.join(root, 'dist');
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(path.join(out, 'api'), { recursive: true });
const BUILD = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '');
const order = ['finance', 'accounting', 'investing', 'stocks', 'ai', 'self', 'inner'];
const parts = ['L1', 'D1', 'L2', 'L3', 'D2', 'exams'];
let content = '', missing = [];
for (const s of order) for (const p of parts) {
  const f = path.join(root, 'content', `${s}-${p}.js`);
  if (fs.existsSync(f)) content += fs.readFileSync(f, 'utf8').trim() + '\n'; else missing.push(`${s}-${p}`);
}
const safe = t => t.replace(/<\/script/gi, '<\\/script');
let html = fs.readFileSync(src('index.html'), 'utf8')
  .replace('<!--STYLES-->', () => `<style>${fs.readFileSync(src('styles.css'), 'utf8')}</style>`)
  .replace('<!--CONTENT-->', () => `<script>${safe(content)}</script>`)
  .replace('<!--SCRIPTS-->', () => `<script>window.FERMATA_BUILD="${BUILD}";\n${safe(fs.readFileSync(src('figures.js'), 'utf8'))}\n${safe(fs.readFileSync(src('app.js'), 'utf8'))}</script>`);
fs.writeFileSync(path.join(out, 'index.html'), html);
fs.writeFileSync(path.join(out, 'sw.js'), fs.readFileSync(src('sw.js'), 'utf8').replace('__BUILD__', BUILD));
for (const f of ['manifest.json', 'vercel.json', 'README.md']) fs.copyFileSync(src(f), path.join(out, f));
for (const n of [180, 192, 512]) fs.copyFileSync(src(`icons/icon-${n}.png`), path.join(out, `icon-${n}.png`));
fs.mkdirSync(path.join(out, 'fonts')); for (const f of fs.readdirSync(src('fonts'))) fs.copyFileSync(src('fonts/' + f), path.join(out, 'fonts', f));
fs.copyFileSync(path.join(root, 'api', 'news.js'), path.join(out, 'api', 'news.js'));
console.log(`build ${BUILD}: index.html ${(html.length / 1024).toFixed(0)} KB` + (missing.length ? `; missing: ${missing.join(', ')}` : '; all content present'));
