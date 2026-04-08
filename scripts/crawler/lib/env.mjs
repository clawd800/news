import { existsSync, readFileSync } from 'node:fs';

let cache = null;

export function loadEnvFile(path = '.env') {
  if (cache) return cache;
  const env = {};
  if (!existsSync(path)) {
    cache = env;
    return env;
  }

  const text = readFileSync(path, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    if (!line || line.trim().startsWith('#')) continue;
    const index = line.indexOf('=');
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    env[key] = value;
  }

  cache = env;
  return env;
}

export function getEnv(name, path = '.env') {
  return process.env[name] || loadEnvFile(path)[name] || '';
}

