#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..', '..');

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

function readEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return {};
  const env = {};
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    if (!line || line.trim().startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

function requireArg(args, name) {
  const value = args[name];
  if (!value || value === true) {
    throw new Error(`Missing required argument --${name}`);
  }
  return String(value);
}

function pickAttachment(articleDir) {
  const videoPath = path.join(articleDir, 'video.mp4');
  if (fs.existsSync(videoPath)) return videoPath;
  const pngPath = path.join(articleDir, 'thumbnail.png');
  if (fs.existsSync(pngPath)) return pngPath;
  const jpgPath = path.join(articleDir, 'thumbnail.jpg');
  if (fs.existsSync(jpgPath)) return jpgPath;
  throw new Error(`No attachment found in ${articleDir}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const date = requireArg(args, 'date');
  const slug = requireArg(args, 'slug');
  const title = requireArg(args, 'title');
  const summary = requireArg(args, 'summary');
  const author = requireArg(args, 'author');
  const articleUrl = requireArg(args, 'article-url');
  const articleDir = args['article-dir']
    ? path.resolve(String(args['article-dir']))
    : path.join(projectRoot, 'news', date, slug);

  const envFile = readEnvFile(path.join(projectRoot, '.env'));
  const webhookUrl = String(args['webhook-url'] || process.env.DISCORD_WEBHOOK_URL || envFile.DISCORD_WEBHOOK_URL || '');
  if (!webhookUrl) {
    throw new Error('DISCORD_WEBHOOK_URL is missing');
  }

  const attachmentPath = pickAttachment(articleDir);
  const content = `# ${title}
${summary}
[${author}](https://x.com/${author.replace(/^@/, '')}) | [Source](${articleUrl})`;
  const payload = { content, flags: 4 };

  if (args['dry-run']) {
    console.log(JSON.stringify({ payload, attachmentPath }, null, 2));
    return;
  }

  const form = new FormData();
  form.append('payload_json', JSON.stringify(payload));
  form.append(
    'file',
    new Blob([fs.readFileSync(attachmentPath)], { type: attachmentPath.endsWith('.mp4') ? 'video/mp4' : 'image/png' }),
    path.basename(attachmentPath),
  );

  const response = await fetch(webhookUrl, {
    method: 'POST',
    body: form,
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Discord webhook failed (${response.status}): ${text}`);
  }

  console.log(text);
}

main().catch((error) => {
  console.error(error.message || String(error));
  process.exit(1);
});
