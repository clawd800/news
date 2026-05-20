#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (const byte of buf) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length, 0);
  typeBuf.copy(out, 4);
  data.copy(out, 8);
  out.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 8 + data.length);
  return out;
}

function hashString(value) {
  let hash = 2166136261;
  for (const char of String(value)) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function hslToRgb(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };
  return [f(0), f(8), f(4)];
}

function writePng(filePath, title) {
  const width = 1200;
  const height = 675;
  const hash = hashString(title || path.basename(path.dirname(filePath)));
  const baseHue = hash % 360;
  const [r1, g1, b1] = hslToRgb(baseHue, 0.42, 0.18);
  const [r2, g2, b2] = hslToRgb((baseHue + 42) % 360, 0.5, 0.42);
  const [r3, g3, b3] = hslToRgb((baseHue + 188) % 360, 0.36, 0.78);
  const raw = Buffer.alloc((width * 3 + 1) * height);

  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 3 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const t = (x / (width - 1)) * 0.7 + (y / (height - 1)) * 0.3;
      const band = ((Math.floor((x + y * 1.6) / 92) + (hash % 5)) % 7) === 0 ? 0.13 : 0;
      const center = Math.hypot((x - width * 0.72) / width, (y - height * 0.42) / height);
      const glow = Math.max(0, 0.5 - center) * 1.5;
      const idx = row + 1 + x * 3;
      raw[idx] = Math.min(255, Math.round(r1 * (1 - t) + r2 * t + r3 * (band + glow)));
      raw[idx + 1] = Math.min(255, Math.round(g1 * (1 - t) + g2 * t + g3 * (band + glow)));
      raw[idx + 2] = Math.min(255, Math.round(b1 * (1 - t) + b2 * t + b3 * (band + glow)));
    }
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 2;
  header[10] = 0;
  header[11] = 0;
  header[12] = 0;

  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);

  fs.writeFileSync(filePath, png);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const articleDir = args['article-dir'];
  if (!articleDir || articleDir === true) {
    throw new Error('Missing required argument --article-dir');
  }

  const output = path.resolve(String(articleDir), 'thumbnail.png');
  if (fs.existsSync(output) && fs.statSync(output).size > 0 && !args.force) {
    console.log(JSON.stringify({ ok: true, path: output, skipped: true }));
    return;
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });
  writePng(output, args.title || '');
  console.log(JSON.stringify({ ok: true, path: output, bytes: fs.statSync(output).size }));
}

main();
