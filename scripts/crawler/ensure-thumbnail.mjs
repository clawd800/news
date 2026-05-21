#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

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

  const thumbnailPath = path.resolve(String(articleDir), 'thumbnail.png');
  if (!fs.existsSync(thumbnailPath)) {
    throw new Error(`Missing thumbnail.png at ${thumbnailPath}. Generate an article-specific thumbnail before publishing.`);
  }

  const stat = fs.statSync(thumbnailPath);
  if (!stat.isFile() || stat.size <= 0) {
    throw new Error(`Invalid thumbnail.png at ${thumbnailPath}: file is empty or not a regular file.`);
  }

  console.log(JSON.stringify({ ok: true, path: thumbnailPath, bytes: stat.size, validated: true }));
}

main();
