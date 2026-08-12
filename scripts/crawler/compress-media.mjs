#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  DEFAULT_IMAGE_MAX_WIDTH,
  DEFAULT_IMAGE_QUALITY,
  DEFAULT_VIDEO_CRF,
  DEFAULT_VIDEO_MAX_WIDTH,
  bytesLabel,
  compressArticleThumbnail,
  compressVideoFile,
  parseArgs,
} from './lib/media-compress.mjs';

function walk(dir, matcher, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, matcher, files);
    } else if (matcher(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function repoTrackedFiles(rootDir) {
  const result = spawnSync('git', ['ls-files', '-z', rootDir], { encoding: 'utf8' });
  if (result.error || result.status !== 0) {
    throw new Error(`git ls-files failed: ${(result.stderr || result.error?.message || '').trim()}`);
  }
  return new Set(result.stdout.split('\0').filter(Boolean));
}

function relative(filePath) {
  return path.relative(process.cwd(), filePath).split(path.sep).join('/');
}

function logProgress(enabled, message) {
  if (enabled) console.error(message);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const rootDir = path.resolve(String(args.root || 'news'));
  const trackedOnly = Boolean(args['tracked-only']);
  const imagesOnly = Boolean(args['images-only']);
  const videosOnly = Boolean(args['videos-only']);
  const verbose = Boolean(args.verbose);
  const limit = args.limit ? Number(args.limit) : Infinity;

  if (!fs.existsSync(rootDir)) {
    throw new Error(`Missing media root: ${rootDir}`);
  }

  const tracked = trackedOnly ? repoTrackedFiles(path.relative(process.cwd(), rootDir)) : null;
  const indexFiles = walk(rootDir, (file) => path.basename(file) === 'index.md')
    .filter((file) => !tracked || tracked.has(relative(file)))
    .slice(0, limit);

  const stats = {
    articles: 0,
    thumbnailsChanged: 0,
    thumbnailsSkipped: 0,
    videosChanged: 0,
    videosSkipped: 0,
    errors: [],
    savedBytes: 0,
  };

  for (const indexPath of indexFiles) {
    const articleDir = path.dirname(indexPath);
    stats.articles += 1;

    if (!videosOnly) {
      try {
        const result = compressArticleThumbnail({
          articleDir,
          maxWidth: Number(args['image-max-width'] || DEFAULT_IMAGE_MAX_WIDTH),
          quality: Number(args['image-quality'] || DEFAULT_IMAGE_QUALITY),
          force: Boolean(args.force),
        });
        if (!result.ok) {
          stats.thumbnailsSkipped += 1;
        } else if (result.replaced || result.converted) {
          stats.thumbnailsChanged += 1;
          stats.savedBytes += result.savedBytes || 0;
          logProgress(verbose, `image ${relative(articleDir)} saved ${bytesLabel(result.savedBytes || 0)}`);
        } else {
          stats.thumbnailsSkipped += 1;
        }
      } catch (error) {
        stats.errors.push({ file: relative(indexPath), reason: error.message });
      }
    }

    if (!imagesOnly) {
      const videoPath = path.join(articleDir, String(args.video || 'video.mp4'));
      if (!fs.existsSync(videoPath)) continue;
      if (tracked && !tracked.has(relative(videoPath))) continue;

      try {
        const result = compressVideoFile({
          inputPath: videoPath,
          maxWidth: Number(args['video-max-width'] || DEFAULT_VIDEO_MAX_WIDTH),
          crf: Number(args['video-crf'] || DEFAULT_VIDEO_CRF),
          force: Boolean(args.force),
        });
        if (result.replaced) {
          stats.videosChanged += 1;
          stats.savedBytes += result.savedBytes || 0;
          logProgress(verbose, `video ${relative(videoPath)} saved ${bytesLabel(result.savedBytes || 0)}`);
        } else {
          stats.videosSkipped += 1;
        }
      } catch (error) {
        stats.errors.push({ file: relative(videoPath), reason: error.message });
      }
    }
  }

  const summary = {
    ok: stats.errors.length === 0,
    ...stats,
    saved: bytesLabel(stats.savedBytes),
  };

  console.log(JSON.stringify(summary, null, 2));
  if (stats.errors.length) process.exit(1);
}

main();
