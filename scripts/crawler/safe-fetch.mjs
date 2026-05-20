#!/usr/bin/env node
import { safeFetch } from './lib/safe-fetch.mjs';

function parseArgs(argv) {
  const args = {
    match: '',
    matchLimit: 12,
    includeHeaders: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (value === '--match') {
      args.match = argv[++i] || '';
    } else if (value === '--match-limit') {
      args.matchLimit = Number(argv[++i] || 12);
    } else if (value === '--timeout-ms') {
      args.timeoutMs = Number(argv[++i] || 15_000);
    } else if (value === '--include-headers') {
      args.includeHeaders = true;
    } else if (!args.url) {
      args.url = value;
    }
  }

  return args;
}

const args = parseArgs(process.argv.slice(2));

if (!args.url) {
  console.log(JSON.stringify({
    ok: false,
    httpOk: false,
    error: 'usage: node scripts/crawler/safe-fetch.mjs <url> [--match <regex>]',
  }, null, 2));
  process.exit(0);
}

const result = await safeFetch(args.url, args);
console.log(JSON.stringify(result, null, 2));

process.exit(0);
