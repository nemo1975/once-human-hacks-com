import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const src = process.argv[2];
const out = process.argv[3] ?? path.resolve('public');

if (!src) {
  console.error('Usage: node scripts/make-favicon.mjs <source.png> [outDir]');
  process.exit(1);
}

const meta = await sharp(src).metadata();
console.log('source', meta.width, meta.height, meta.format);

const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

let minX = width;
let minY = height;
let maxX = 0;
let maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const luma = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    if (luma > 10) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
}

if (maxX < minX || maxY < minY) {
  minX = 0;
  minY = 0;
  maxX = width - 1;
  maxY = height - 1;
}

const markW = maxX - minX + 1;
const markH = maxY - minY + 1;
const side = Math.max(markW, markH);
const pad = Math.round(side * 0.08);
const square = side + pad * 2;
const left = Math.round(minX - (square - markW) / 2);
const top = Math.round(minY - (square - markH) / 2);

console.log('mark bbox', { minX, minY, maxX, maxY, markW, markH, square });

const master = await sharp(src)
  .extract({
    left: Math.max(0, left),
    top: Math.max(0, top),
    width: Math.min(square, width - Math.max(0, left)),
    height: Math.min(square, height - Math.max(0, top)),
  })
  .extend({
    top: Math.max(0, -top),
    left: Math.max(0, -left),
    bottom: Math.max(0, top + square - height),
    right: Math.max(0, left + square - width),
    background: { r: 0, g: 0, b: 0, alpha: 1 },
  })
  .resize(1024, 1024, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
  .png({ compressionLevel: 9 })
  .toBuffer();

async function png(size) {
  return sharp(master)
    .resize(size, size, { fit: 'fill', kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function pngSize(buf) {
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}

function encodeIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let o = 6;
  let dataOffset = headerSize;
  const parts = [header];

  for (const buf of pngBuffers) {
    const { w, h } = pngSize(buf);
    header.writeUInt8(w >= 256 ? 0 : w, o);
    header.writeUInt8(h >= 256 ? 0 : h, o + 1);
    header.writeUInt8(0, o + 2);
    header.writeUInt8(0, o + 3);
    header.writeUInt16LE(1, o + 4);
    header.writeUInt16LE(32, o + 6);
    header.writeUInt32LE(buf.length, o + 8);
    header.writeUInt32LE(dataOffset, o + 12);
    o += 16;
    dataOffset += buf.length;
    parts.push(buf);
  }

  return Buffer.concat(parts);
}

function svgFromPng(buf, size, label) {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="${label}">`,
    `  <image href="data:image/png;base64,${buf.toString('base64')}" width="${size}" height="${size}"/>`,
    '</svg>',
    '',
  ].join('\n');
}

const files = {
  'favicon-16.png': 16,
  'favicon-32.png': 32,
  'favicon-48.png': 48,
  'favicon-192.png': 192,
  'apple-touch-icon.png': 180,
  'favicon-512.png': 512,
};

for (const [name, size] of Object.entries(files)) {
  const buf = await png(size);
  fs.writeFileSync(path.join(out, name), buf);
  console.log('wrote', name, buf.length);
}

const ico = encodeIco([await png(16), await png(32), await png(48)]);
fs.writeFileSync(path.join(out, 'favicon.ico'), ico);
console.log('wrote favicon.ico', ico.length);

const svgPng = await png(256);
fs.writeFileSync(path.join(out, 'favicon.svg'), svgFromPng(svgPng, 256, 'Once Human Hacks'));
console.log('wrote favicon.svg');

const logoPng = await png(128);
fs.writeFileSync(path.join(out, 'logo.svg'), svgFromPng(logoPng, 128, 'Once Human Hacks'));
console.log('wrote logo.svg');
