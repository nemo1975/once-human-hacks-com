import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const gameplayDir = path.join(root, 'public', 'images', 'gameplay');
const blogDir = path.join(root, 'public', 'images', 'blog');
const addonsDir = path.join(root, 'public', 'images', 'addons');
const gameplaySourceDir = path.join(root, 'scripts', 'assets', 'gameplay');

fs.mkdirSync(gameplayDir, { recursive: true });
fs.mkdirSync(blogDir, { recursive: true });
fs.mkdirSync(addonsDir, { recursive: true });

const gameplaySources = {
  'aimbot-fov': 'aimbot-fov.png',
  'item-esp-radar': 'item-esp-radar.png',
  'player-esp': 'player-esp.png',
  'settlement-esp': 'settlement-esp.png',
};

async function writePhoto(name, sourceName) {
  const source = path.join(gameplaySourceDir, sourceName);
  const gameplayPng = path.join(gameplayDir, `${name}.png`);
  const blogPng = path.join(blogDir, `${name}.png`);
  if (!fs.existsSync(source)) {
    console.warn('Missing gameplay source', path.relative(root, source));
    return;
  }
  await sharp(source)
    .resize({ width: 1920, height: 1080, fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9 })
    .toFile(gameplayPng);
  fs.copyFileSync(gameplayPng, blogPng);
  console.log('wrote', path.relative(root, gameplayPng), '(from source photo)');
  console.log('copied', path.relative(root, blogPng));
}

function addonSvg(inner, label) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      <rect width="1024" height="1024" fill="#0b0b0b"/>
      <rect x="72" y="72" width="880" height="880" rx="160" fill="#141210" stroke="#c45a3a" stroke-width="10"/>
      ${inner}
      <text x="512" y="880" text-anchor="middle" fill="#f3e8e2" font-family="Segoe UI, Arial, sans-serif" font-size="54" font-weight="700" letter-spacing="4">${label}</text>
    </svg>
  `;
}

const addons = {
  'skin-changer': addonSvg(
    `
      <path d="M512 240 l150 70 v150 c0 110-66 200-150 240-84-40-150-130-150-240 V310z" fill="none" stroke="#c45a3a" stroke-width="16"/>
      <path d="M512 280 l110 52 v118 c0 86-50 156-110 188-60-32-110-102-110-188 V332z" fill="#c45a3a" fill-opacity="0.16"/>
      <path d="M360 430 l-70 18 90 40 M664 430 l70 18 -90 40" fill="none" stroke="#e07050" stroke-width="14" stroke-linecap="round"/>
      <circle cx="512" cy="430" r="28" fill="#e07050"/>
    `,
    'SKIN CHANGER',
  ),
};

const ogSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#0b0b0b"/>
    <circle cx="980" cy="120" r="260" fill="#c45a3a" fill-opacity="0.12"/>
    <rect x="64" y="64" width="1072" height="502" rx="28" fill="none" stroke="#c45a3a" stroke-opacity="0.45" stroke-width="2"/>
    <circle cx="160" cy="200" r="54" fill="none" stroke="#c45a3a" stroke-width="4"/>
    <path fill="#c45a3a" d="M160 156l11 34h36l-29 21 11 34-29-21-29 21 11-34-29-21h36z"/>
    <text x="240" y="188" fill="#f3e8e2" font-family="Segoe UI, Arial, sans-serif" font-size="42" font-weight="700">Once Human Hacks</text>
    <text x="240" y="232" fill="#c45a3a" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="600">FOR WINDOWS PC</text>
    <text x="80" y="360" fill="#f3e8e2" font-family="Segoe UI, Arial, sans-serif" font-size="52" font-weight="700">Aimbot, ESP &amp; Radar</text>
    <text x="80" y="424" fill="#a39a92" font-family="Segoe UI, Arial, sans-serif" font-size="26">Compare modules, check live status, then confirm the merchant listing.</text>
    <text x="80" y="520" fill="#c9b8ae" font-family="Segoe UI, Arial, sans-serif" font-size="20">oncehumanhacks.com</text>
  </svg>
`;

async function writePng(filePath, svg, width, height) {
  await sharp(Buffer.from(svg))
    .resize(width, height)
    .png({ compressionLevel: 9 })
    .toFile(filePath);
  console.log('wrote', path.relative(root, filePath));
}

for (const [name, sourceName] of Object.entries(gameplaySources)) {
  await writePhoto(name, sourceName);
}

for (const [name, svg] of Object.entries(addons)) {
  await writePng(path.join(addonsDir, `${name}.png`), svg, 1024, 1024);
}

async function writeAddonPhoto(name, sourceFile) {
  const source = path.join(root, 'scripts', 'assets', sourceFile);
  const pngPath = path.join(addonsDir, `${name}.png`);
  if (!fs.existsSync(source)) {
    if (!fs.existsSync(pngPath)) {
      console.warn('Missing addon source image at', path.relative(root, source));
    }
    return;
  }
  await sharp(source)
    .resize({
      width: 1920,
      height: 1080,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .png({ compressionLevel: 9 })
    .toFile(pngPath);
  console.log('wrote', path.relative(root, pngPath), '(from source photo)');
}

await writeAddonPhoto('hwid-spoofer', 'hwid-spoofer-source.jpg');
await writeAddonPhoto('cloud-dma', 'cloud-dma-source.jpg');

await writePng(path.join(root, 'public', 'og.png'), ogSvg, 1200, 630);

console.log('Brand visuals generated.');
