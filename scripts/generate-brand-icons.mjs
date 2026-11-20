import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const src = path.join(publicDir, 'favicon-512.png');

await sharp(src).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(src).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32.png'));
await sharp(src).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16.png'));

console.log('Brand icons generated from favicon-512.png: apple-touch-icon.png, favicon-16/32.png');
