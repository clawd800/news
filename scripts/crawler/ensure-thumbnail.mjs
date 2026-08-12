#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  DEFAULT_IMAGE_MAX_WIDTH,
  DEFAULT_IMAGE_QUALITY,
  compressArticleThumbnail,
} from './lib/media-compress.mjs';

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

function main() {
  const args = parseArgs(process.argv.slice(2));
  const articleDir = args['article-dir'];
  if (!articleDir || articleDir === true) {
    throw new Error('Missing required argument --article-dir');
  }

  const articlePath = path.resolve(String(articleDir));
  const compressed = compressArticleThumbnail({
    articleDir: articlePath,
    maxWidth: Number(args['max-width'] || DEFAULT_IMAGE_MAX_WIDTH),
    quality: Number(args.quality || DEFAULT_IMAGE_QUALITY),
    force: Boolean(args.force),
  });

  if (!compressed.ok) {
    throw new Error(`Invalid thumbnail in ${articlePath}: ${compressed.reason}`);
  }

  const thumbnailPath = compressed.path;
  if (!fs.existsSync(thumbnailPath)) {
    throw new Error(`Missing thumbnail at ${thumbnailPath}. Generate an article-specific thumbnail before publishing.`);
  }

  const stat = fs.statSync(thumbnailPath);
  if (!stat.isFile() || stat.size <= 0) {
    throw new Error(`Invalid thumbnail at ${thumbnailPath}: file is empty or not a regular file.`);
  }

  console.log(JSON.stringify({
    ok: true,
    path: thumbnailPath,
    thumbnail: compressed.thumbnail,
    bytes: stat.size,
    compressed: Boolean(compressed.replaced || compressed.converted),
    savedBytes: compressed.savedBytes || 0,
    validated: true,
  }));
}

main();
