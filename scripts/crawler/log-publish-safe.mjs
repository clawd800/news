#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
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

function requireArg(args, name) {
  const value = args[name];
  if (!value || value === true) throw new Error(`Missing required argument --${name}`);
  return String(value);
}

function readArticleMetadata(articleDir) {
  const indexPath = path.join(articleDir, 'index.md');
  if (!fs.existsSync(indexPath)) return {};

  const content = fs.readFileSync(indexPath, 'utf8');
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) return {};

  const meta = {};
  for (const line of frontmatter[1].split(/\r?\n/)) {
    const match = line.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return meta;
}

function kstTimestamp() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .formatToParts(new Date())
    .reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});

  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
}

function appendLine(filePath, line) {
  fs.appendFileSync(filePath, `${line}\n`, 'utf8');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const date = requireArg(args, 'date');
  const slug = requireArg(args, 'slug');
  const articleDir = args['article-dir']
    ? path.resolve(String(args['article-dir']))
    : path.join(projectRoot, 'news', date, slug);
  const articleMeta = readArticleMetadata(articleDir);
  const title = String(args.title || articleMeta.title || slug).trim();
  const summary = String(args.summary || articleMeta.summary || title).trim();
  const articleUrl = String(args['article-url'] || `https://news.800.works/news/${date}/${slug}/`);
  const memoryDir = path.join(os.homedir(), 'clawd', 'memory');
  const dailyPath = path.join(memoryDir, `${date}.md`);
  const postsLogPath = path.join(memoryDir, 'posts-log.md');

  if (args['dry-run']) {
    console.log(
      JSON.stringify(
        {
          dailyPath,
          dailyLine: `- Published NEWS article: ${title} (${slug})`,
          postsLogPath,
          postsLogLine: `[${kstTimestamp()}] NEWS | article | ${articleUrl} | ${summary}`,
        },
        null,
        2,
      ),
    );
    return;
  }

  fs.mkdirSync(memoryDir, { recursive: true });
  appendLine(dailyPath, `- Published NEWS article: ${title} (${slug})`);
  appendLine(postsLogPath, `[${kstTimestamp()}] NEWS | article | ${articleUrl} | ${summary}`);
  console.log('Log: ✅');
}

try {
  main();
} catch (error) {
  console.log(`Log: ❌ ${error.message || String(error)}`);
}

process.exit(0);
