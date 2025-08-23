#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import url from 'url';
import sharp from 'sharp';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '..', 'src', 'assets', 'images', 'projects');

const exts = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else await maybeConvert(full);
  }
}

async function maybeConvert(file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return;
  const target = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  try {
    await fs.promises.access(target, fs.constants.F_OK);
    console.log('skip (exists):', path.relative(SRC_DIR, target));
    return;
  } catch {}

  try {
    await sharp(file)
      .webp({ quality: 82 })
      .toFile(target);
    console.log('created:', path.relative(SRC_DIR, target));
  } catch (e) {
    console.error('failed:', file, e.message);
  }
}

(async function main() {
  try {
    await walk(SRC_DIR);
    console.log('Done.');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

