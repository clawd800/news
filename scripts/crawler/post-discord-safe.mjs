#!/usr/bin/env node
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..', '..');
const scriptPath = path.join(__dirname, 'post-discord.mjs');

function lastUsefulLines(text) {
  const lines = String(text || '')
    .trim()
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.slice(-5).join('\n');
}

const child = spawn(process.execPath, [scriptPath, ...process.argv.slice(2)], {
  cwd: projectRoot,
  env: process.env,
  stdio: ['ignore', 'pipe', 'pipe'],
});

let stdout = '';
let stderr = '';

child.stdout.setEncoding('utf8');
child.stderr.setEncoding('utf8');
child.stdout.on('data', (chunk) => {
  stdout += chunk;
});
child.stderr.on('data', (chunk) => {
  stderr += chunk;
});

child.on('error', (error) => {
  console.log(`Discord: ❌ ${error.message}`);
  process.exit(0);
});

child.on('close', (code, signal) => {
  if (code === 0) {
    console.log('Discord: ✅');
    process.exit(0);
  }

  const reason =
    lastUsefulLines(stderr) ||
    lastUsefulLines(stdout) ||
    (signal ? `terminated by signal ${signal}` : `exit code ${code}`);
  console.log(`Discord: ❌ ${reason}`);
  process.exit(0);
});
