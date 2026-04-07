import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

function walk(dir, found = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) {
      walk(fullPath, found);
      continue;
    }
    if (entry === 'index.md') found.push(fullPath);
  }
  return found;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const block = match[1];
  const titleMatch = block.match(/^title:\s+"?(.*?)"?$/m);
  const sources = [...block.matchAll(/https?:\/\/[^\s\]]+/g)].map((match) => match[0]);

  return {
    title: titleMatch?.[1]?.trim() ?? '',
    sources,
  };
}

export function loadArticleIndex(newsRoot) {
  const entries = [];
  const files = walk(newsRoot);

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    const parsed = parseFrontmatter(content);
    const slug = path.basename(path.dirname(file));
    const day = path.basename(path.dirname(path.dirname(file)));
    entries.push({
      file,
      slug,
      day,
      title: parsed.title,
      sources: parsed.sources,
    });
  }

  return entries;
}

