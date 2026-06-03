const { marked } = require('marked');
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const DOCS  = path.resolve(__dirname, '..', 'docs');
const OUT   = path.join(__dirname, 'MLLI_SPEC_All_Guides.pdf');

const GUIDES = [
  { file: 'index.md',           label: 'Overview' },
  { file: 'GUIDE_CLIENT.md',    label: 'Client Guide' },
  { file: 'GUIDE_CASHIER.md',   label: 'Cashier Guide' },
  { file: 'GUIDE_DISPATCHER.md',label: 'Dispatcher Guide' },
  { file: 'GUIDE_LSR.md',       label: 'LSR Guide' },
  { file: 'GUIDE_LAB.md',       label: 'Lab Guide' },
  { file: 'GUIDE_CMS.md',       label: 'CMS Guide' },
];

// ─── HTML builder ───────────────────────────────────────────────────────────

function buildHTML() {
  const cover = `
    <div class="cover">
      <div class="cover-inner">
        <div class="cover-icon">🏥</div>
        <h1 class="cover-title">MLLI SPEC Platform</h1>
        <p class="cover-sub">Staff Documentation &amp; User Guides</p>
        <div class="cover-divider"></div>
        <p class="cover-meta">All Roles — Complete Guide &nbsp;|&nbsp; Version 1.0 &nbsp;|&nbsp; April 2026</p>
        <div class="cover-roles">
          <span>🏥 Client</span><span>💵 Cashier</span><span>🚀 Dispatcher</span>
          <span>🚗 LSR</span><span>🧪 Lab</span><span>📋 CMS</span>
        </div>
      </div>
    </div>`;

  const toc = `
    <div class="toc-page">
      <h2 class="toc-heading">Table of Contents</h2>
      <ol class="toc-list">
        ${GUIDES.map((g, i) => `<li><span class="toc-num">${String(i + 1).padStart(2, '0')}</span>${g.label}</li>`).join('')}
      </ol>
    </div>`;

  const sections = GUIDES.map((g, i) => {
    const md   = fs.readFileSync(path.join(DOCS, g.file), 'utf8');
    const html = marked(md);
    return `<div class="guide${i === 0 ? ' first' : ''}">${html}</div>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<style>
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.65;
  color: #212121;
  background: #fff;
}

/* ── Cover ── */
.cover {
  page-break-after: always;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(145deg, #1565C0 0%, #0D47A1 55%, #082d75 100%);
  color: #fff;
  text-align: center;
}
.cover-inner { max-width: 540px; padding: 2rem; }
.cover-icon  { font-size: 5rem; margin-bottom: 1rem; }
.cover-title { font-size: 2.6rem; font-weight: 800; color: #fff; margin-bottom: .4rem; letter-spacing: -.5px; }
.cover-sub   { font-size: 1.2rem; opacity: .85; margin-bottom: 1.8rem; }
.cover-divider { width: 60px; height: 3px; background: rgba(255,255,255,.5); margin: 0 auto 1.5rem; border-radius: 2px; }
.cover-meta  { font-size: .9rem; opacity: .65; margin-bottom: 2rem; }
.cover-roles { display: flex; flex-wrap: wrap; gap: .6rem; justify-content: center; }
.cover-roles span {
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.25);
  padding: .35rem .9rem;
  border-radius: 20px;
  font-size: .9rem;
  font-weight: 600;
}

/* ── TOC ── */
.toc-page { page-break-after: always; padding: 3rem 2rem; }
.toc-heading {
  font-size: 1.6rem;
  font-weight: 800;
  color: #0D47A1;
  margin-bottom: 2rem;
  padding-bottom: .6rem;
  border-bottom: 3px solid #1565C0;
}
.toc-list { list-style: none; }
.toc-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .7rem 0;
  border-bottom: 1px dashed #E0E0E0;
  font-size: 1.05rem;
  font-weight: 500;
  color: #1a1a1a;
}
.toc-num {
  width: 2rem;
  height: 2rem;
  background: #1565C0;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .8rem;
  font-weight: 700;
  flex-shrink: 0;
}

/* ── Guide sections ── */
.guide             { page-break-before: always; padding: 0 0 2.5rem; }
.guide.first       { page-break-before: auto; }

/* ── Headings ── */
h1 {
  font-size: 1.7rem;
  font-weight: 800;
  color: #0D47A1;
  background: #E3F2FD;
  border-left: 5px solid #1565C0;
  padding: .9rem 1.2rem;
  border-radius: 0 6px 6px 0;
  margin: 1.8rem 0 1rem;
}
h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1565C0;
  margin: 1.4rem 0 .5rem;
  padding-bottom: .3rem;
  border-bottom: 2px solid #BBDEFB;
}
h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #1976D2;
  margin: 1rem 0 .35rem;
}
h4 { font-size: .95rem; font-weight: 600; color: #333; margin: .8rem 0 .3rem; }

/* ── Body text ── */
p  { margin: .4rem 0; }
ul, ol { margin: .4rem 0 .5rem 1.6rem; }
li { margin: .2rem 0; }
a  { color: #1565C0; }

/* ── Tables ── */
table {
  width: 100%;
  border-collapse: collapse;
  margin: .7rem 0 1rem;
  font-size: 9.5pt;
  page-break-inside: avoid;
}
th {
  background: #1565C0;
  color: #fff;
  padding: .45rem .7rem;
  text-align: left;
  font-weight: 600;
  font-size: 9pt;
}
td {
  padding: .38rem .7rem;
  border-bottom: 1px solid #E8E8E8;
  vertical-align: top;
}
tr:nth-child(even) td { background: #F8FBFF; }

/* ── Code ── */
code {
  font-family: 'SFMono-Regular', 'Consolas', 'Courier New', monospace;
  font-size: 8.5pt;
  background: #F5F5F5;
  color: #C62828;
  padding: .1rem .3rem;
  border-radius: 3px;
}
pre {
  background: #F5F5F5;
  border-left: 3px solid #BDBDBD;
  border-radius: 0 5px 5px 0;
  padding: .7rem 1rem;
  margin: .5rem 0;
  overflow-x: auto;
  page-break-inside: avoid;
}
pre code { background: none; color: #2e2e2e; padding: 0; }

/* ── Blockquotes (tips / notes) ── */
blockquote {
  border-left: 4px solid #1565C0;
  background: #E3F2FD;
  padding: .55rem 1rem;
  margin: .7rem 0;
  border-radius: 0 5px 5px 0;
  color: #0D47A1;
}
blockquote p { margin: 0; }

/* ── HR ── */
hr { border: none; border-top: 1px solid #EEEEEE; margin: 1rem 0; }

/* ── Checkboxes ── */
input[type=checkbox] { margin-right: .35rem; }

/* ── Mermaid ── */
.mermaid {
  text-align: center;
  margin: 1.2rem 0;
  page-break-inside: avoid;
}
.mermaid svg { max-width: 100% !important; height: auto !important; }

/* ── Print ── */
@media print {
  h1, h2, h3 { page-break-after: avoid; }
  .mermaid, table, pre { page-break-inside: avoid; }
}
</style>
</head>
<body>
${cover}
${toc}
${sections}
</body>
</html>`;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('📚 Merging all guides...');
  const html = buildHTML();

  console.log('🚀 Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
  });

  try {
    const page = await browser.newPage();
    page.on('console', msg => process.stdout.write(`  [page] ${msg.text()}\n`));

    console.log('📄 Loading content (fetching Mermaid.js from CDN)...');
    await page.setContent(html, { waitUntil: 'networkidle2', timeout: 60000 });

    // Ensure Mermaid.js script has loaded
    await page.waitForFunction(() => typeof window.mermaid !== 'undefined', { timeout: 30000 });

    console.log('🔷 Rendering flowcharts...');
    await page.evaluate(async () => {
      // Convert Jekyll-style code blocks → mermaid divs
      document.querySelectorAll('pre code.language-mermaid').forEach(code => {
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = code.textContent;
        code.parentNode.parentNode.replaceChild(div, code.parentNode);
      });
      window.mermaid.initialize({ startOnLoad: false, theme: 'default' });
      await window.mermaid.run({ nodes: document.querySelectorAll('.mermaid') });
    });

    // Small buffer for SVG paint to complete
    await new Promise(r => setTimeout(r, 1500));

    console.log('📑 Exporting PDF...');
    await page.pdf({
      path: OUT,
      format: 'A4',
      printBackground: true,
      margin: { top: '14mm', right: '14mm', bottom: '14mm', left: '14mm' },
    });

    const size = (fs.statSync(OUT).size / 1024).toFixed(0);
    console.log(`\n✅  PDF saved → ${OUT}  (${size} KB)\n`);
  } finally {
    await browser.close();
  }
}

main().catch(err => { console.error('\n❌  Error:', err.message); process.exit(1); });
