#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

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

function json(result) {
  console.log(JSON.stringify(result));
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const articleDir = args['article-dir'];
  if (!articleDir || articleDir === true) {
    throw new Error('Missing required argument --article-dir');
  }

  const root = path.resolve(String(articleDir));
  const videoPath = path.resolve(root, String(args.video || 'video.mp4'));
  const outputPath = path.resolve(root, String(args.output || 'thumbnail.png'));
  const timestamp = String(args.timestamp || '00:00:01');

  if (!fs.existsSync(videoPath)) {
    json({ ok: false, reason: 'no-video', video: videoPath });
    return;
  }

  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 0 && !args.force) {
    json({ ok: true, path: outputPath, skipped: true, reason: 'thumbnail-exists' });
    return;
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const result = spawnSync('ffmpeg', [
    '-hide_banner',
    '-loglevel',
    'error',
    '-y',
    '-ss',
    timestamp,
    '-i',
    videoPath,
    '-frames:v',
    '1',
    '-vf',
    'scale=1200:-2,setsar=1',
    outputPath,
  ], { encoding: 'utf8' });

  if (result.error || result.status !== 0) {
    if (fs.existsSync(outputPath) && fs.statSync(outputPath).size === 0) {
      fs.unlinkSync(outputPath);
    }
    json({
      ok: false,
      reason: result.error?.code === 'ENOENT' ? 'ffmpeg-not-found' : 'ffmpeg-failed',
      video: videoPath,
      stderr: (result.stderr || result.error?.message || '').slice(0, 500),
    });
    return;
  }

  const stat = fs.statSync(outputPath);
  if (!stat.isFile() || stat.size <= 0) {
    json({ ok: false, reason: 'empty-output', video: videoPath, path: outputPath });
    return;
  }

  json({ ok: true, path: outputPath, bytes: stat.size, source: 'video-frame' });
}

main();
