import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

export const DEFAULT_IMAGE_MAX_WIDTH = 1200;
export const DEFAULT_IMAGE_QUALITY = 7;
export const DEFAULT_VIDEO_MAX_WIDTH = 960;
export const DEFAULT_VIDEO_CRF = 32;

export function parseArgs(argv) {
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

export function bytesLabel(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = Number(bytes) || 0;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  const digits = value >= 10 || unit === 0 ? 0 : 1;
  return `${value.toFixed(digits)}${units[unit]}`;
}

export function readFrontmatterThumbnail(indexPath) {
  if (!fs.existsSync(indexPath)) return null;
  const text = fs.readFileSync(indexPath, 'utf8');
  const end = text.indexOf('\n---', 4);
  const frontmatter = end === -1 ? text : text.slice(0, end);
  const match = frontmatter.match(/^thumbnail:\s*['"]?([^'"\r\n]+)['"]?\s*$/m);
  return match ? match[1].trim() : null;
}

export function writeFrontmatterThumbnail(indexPath, thumbnailRef) {
  const text = fs.readFileSync(indexPath, 'utf8');
  const end = text.indexOf('\n---', 4);
  const frontmatter = end === -1 ? text : text.slice(0, end);
  const rest = end === -1 ? '' : text.slice(end);
  const line = `thumbnail: ${thumbnailRef}`;
  const updatedFrontmatter = frontmatter.match(/^thumbnail:/m)
    ? frontmatter.replace(/^thumbnail:.*$/m, line)
    : `${frontmatter.trimEnd()}\n${line}`;
  fs.writeFileSync(indexPath, `${updatedFrontmatter}${rest}`);
}

export function fileBytes(filePath) {
  return fs.statSync(filePath).size;
}

function run(command, args) {
  const result = spawnSync(command, args, { encoding: 'utf8' });
  if (result.error || result.status !== 0) {
    const stderr = result.stderr || result.error?.message || '';
    throw new Error(`${command} failed: ${stderr.trim().slice(0, 500)}`);
  }
  return result.stdout;
}

function probeDimensions(filePath) {
  const raw = run('ffprobe', [
    '-v',
    'error',
    '-select_streams',
    'v:0',
    '-show_entries',
    'stream=width,height',
    '-of',
    'json',
    filePath,
  ]);
  const payload = JSON.parse(raw);
  const stream = payload.streams?.[0];
  if (!stream?.width || !stream?.height) {
    throw new Error(`No video/image stream found in ${filePath}`);
  }
  return { width: Number(stream.width), height: Number(stream.height) };
}

function even(value) {
  const rounded = Math.max(2, Math.round(value));
  return rounded % 2 === 0 ? rounded : rounded - 1;
}

function scaledDimensions(filePath, maxWidth) {
  const dimensions = probeDimensions(filePath);
  if (dimensions.width <= maxWidth) {
    return {
      width: even(dimensions.width),
      height: even(dimensions.height),
      scaled: false,
    };
  }
  return {
    width: even(maxWidth),
    height: even((dimensions.height * maxWidth) / dimensions.width),
    scaled: true,
  };
}

function tempPath(outputPath) {
  const dir = path.dirname(outputPath);
  const ext = path.extname(outputPath);
  const base = path.basename(outputPath, ext);
  return path.join(dir, `.${base}.${process.pid}.${Date.now()}.tmp${ext}`);
}

function shouldReplace(tempBytes, existingBytes, force) {
  return force || tempBytes < existingBytes;
}

export function compressImageFile({
  inputPath,
  outputPath,
  maxWidth = DEFAULT_IMAGE_MAX_WIDTH,
  quality = DEFAULT_IMAGE_QUALITY,
  force = false,
}) {
  const originalBytes = fileBytes(inputPath);
  const existingOutputBytes = fs.existsSync(outputPath) ? fileBytes(outputPath) : null;
  const comparisonBytes = existingOutputBytes ?? originalBytes;
  const dimensions = scaledDimensions(inputPath, Number(maxWidth));
  const tmp = tempPath(outputPath);

  const ffmpegArgs = [
    '-hide_banner',
    '-loglevel',
    'error',
    '-y',
    '-i',
    inputPath,
    '-map',
    '0:v:0',
    '-frames:v',
    '1',
    '-vf',
    `scale=${dimensions.width}:${dimensions.height},setsar=1`,
    '-q:v',
    String(quality),
    '-pix_fmt',
    'yuv420p',
    tmp,
  ];

  try {
    run('ffmpeg', ffmpegArgs);
    const compressedBytes = fileBytes(tmp);
    if (!shouldReplace(compressedBytes, comparisonBytes, force)) {
      fs.unlinkSync(tmp);
      return {
        ok: true,
        skipped: true,
        reason: 'already-smaller',
        inputPath,
        outputPath,
        originalBytes,
        compressedBytes,
        savedBytes: 0,
      };
    }

    fs.renameSync(tmp, outputPath);
    return {
      ok: true,
      replaced: true,
      inputPath,
      outputPath,
      originalBytes,
      compressedBytes,
      savedBytes: Math.max(0, originalBytes - compressedBytes),
      scaled: dimensions.scaled,
    };
  } catch (error) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    throw error;
  }
}

function thumbnailJpegRef(thumbnailRef) {
  const parsed = path.parse(thumbnailRef);
  return path.join(parsed.dir, `${parsed.name}.jpg`);
}

function firstExistingThumbnail(articleDir, refs) {
  for (const ref of refs.filter(Boolean)) {
    const candidate = path.resolve(articleDir, ref);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return { ref, path: candidate };
    }
  }
  return null;
}

function removeUnreferencedSiblingPng(articleDir, activeRef) {
  const activePath = path.resolve(articleDir, activeRef);
  if (path.extname(activePath).toLowerCase() !== '.jpg') return 0;

  const pngPath = path.join(path.dirname(activePath), `${path.basename(activePath, '.jpg')}.png`);
  if (!fs.existsSync(pngPath) || pngPath === activePath) return 0;

  const bytes = fileBytes(pngPath);
  fs.unlinkSync(pngPath);
  return bytes;
}

export function compressArticleThumbnail({
  articleDir,
  maxWidth = DEFAULT_IMAGE_MAX_WIDTH,
  quality = DEFAULT_IMAGE_QUALITY,
  force = false,
}) {
  const indexPath = path.join(articleDir, 'index.md');
  const frontmatterRef = readFrontmatterThumbnail(indexPath);
  const thumbnail = firstExistingThumbnail(articleDir, [
    frontmatterRef,
    'thumbnail.png',
    'thumbnail.jpg',
    'thumbnail.jpeg',
  ]);

  if (!thumbnail) {
    return { ok: false, reason: 'missing-thumbnail', articleDir };
  }

  const ext = path.extname(thumbnail.path).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
    return { ok: false, reason: 'unsupported-thumbnail-format', path: thumbnail.path };
  }

  if (ext === '.png') {
    const outputRef = thumbnailJpegRef(thumbnail.ref);
    const outputPath = path.resolve(articleDir, outputRef);
    const result = compressImageFile({
      inputPath: thumbnail.path,
      outputPath,
      maxWidth,
      quality,
      force,
    });

    if (fs.existsSync(outputPath) && fileBytes(outputPath) < fileBytes(thumbnail.path)) {
      if (fs.existsSync(indexPath)) writeFrontmatterThumbnail(indexPath, outputRef);
      fs.unlinkSync(thumbnail.path);
      return {
        ...result,
        ok: true,
        converted: true,
        thumbnail: outputRef,
        path: outputPath,
        bytes: fileBytes(outputPath),
      };
    }

    return {
      ok: true,
      skipped: true,
      reason: 'png-smaller-than-jpeg',
      thumbnail: thumbnail.ref,
      path: thumbnail.path,
      bytes: fileBytes(thumbnail.path),
      savedBytes: 0,
    };
  }

  const outputPath = thumbnail.path;
  const result = compressImageFile({
    inputPath: thumbnail.path,
    outputPath,
    maxWidth,
    quality,
    force,
  });
  const removedSiblingPngBytes = removeUnreferencedSiblingPng(articleDir, thumbnail.ref);

  return {
    ...result,
    ok: true,
    thumbnail: thumbnail.ref,
    path: outputPath,
    bytes: fileBytes(outputPath),
    removedSiblingPngBytes,
    savedBytes: (result.savedBytes || 0) + removedSiblingPngBytes,
  };
}

export function compressVideoFile({
  inputPath,
  maxWidth = DEFAULT_VIDEO_MAX_WIDTH,
  crf = DEFAULT_VIDEO_CRF,
  force = false,
}) {
  const originalBytes = fileBytes(inputPath);
  const dimensions = scaledDimensions(inputPath, Number(maxWidth));
  const tmp = tempPath(inputPath);

  const ffmpegArgs = [
    '-hide_banner',
    '-loglevel',
    'error',
    '-y',
    '-i',
    inputPath,
    '-map',
    '0:v:0',
    '-vf',
    `scale=${dimensions.width}:${dimensions.height},setsar=1`,
    '-c:v',
    'libx264',
    '-preset',
    'veryfast',
    '-crf',
    String(crf),
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    '-an',
    tmp,
  ];

  try {
    run('ffmpeg', ffmpegArgs);
    const compressedBytes = fileBytes(tmp);
    if (!shouldReplace(compressedBytes, originalBytes, force)) {
      fs.unlinkSync(tmp);
      return {
        ok: true,
        skipped: true,
        reason: 'already-smaller',
        inputPath,
        originalBytes,
        compressedBytes,
        savedBytes: 0,
      };
    }

    fs.renameSync(tmp, inputPath);
    return {
      ok: true,
      replaced: true,
      inputPath,
      originalBytes,
      compressedBytes,
      savedBytes: Math.max(0, originalBytes - compressedBytes),
      scaled: dimensions.scaled,
    };
  } catch (error) {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    throw error;
  }
}
