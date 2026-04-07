#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..', '..');

const raw = execFileSync('node', [path.join(projectRoot, 'scripts/crawler/scout.mjs')], {
  cwd: projectRoot,
  encoding: 'utf8',
});

const payload = JSON.parse(raw);

if (!payload.candidates.length) {
  console.log('No candidates found.');
  process.exit(0);
}

console.log('# Open News Scout Brief');
console.log(`Generated: ${payload.generatedAt}`);
console.log('');

for (const [index, candidate] of payload.candidates.entries()) {
  console.log(`## Candidate ${index + 1}`);
  console.log(`- Score: ${candidate.score}`);
  console.log(`- Source: ${candidate.discoverySource}`);
  console.log(`- Author: @${candidate.authorUsername}`);
  console.log(`- Engagement: ${candidate.likeCount} likes, ${candidate.retweetCount} reposts, ${candidate.replyCount} replies`);
  console.log(`- Video: ${candidate.hasVideo ? 'yes' : 'no'}`);
  console.log(`- Link: ${candidate.url}`);
  console.log(`- Text: ${String(candidate.title).replace(/\s+/g, ' ').trim()}`);
  console.log('');
}

