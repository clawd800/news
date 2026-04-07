export const PRIORITY_X_ACCOUNTS = [
  'base',
  'GoogleAI',
  'AnthropicAI',
  'ethereum',
  'jessepollak',
  'VitalikButerin',
  'virtuals_io',
];

export const SEARCH_QUERIES = [
  '(from:base OR from:ethereum OR from:jessepollak OR from:GoogleAI OR from:AnthropicAI) (launch OR launched OR release OR released OR roadmap OR mainnet OR demo OR "open source") min_faves:20',
  '(launch OR launched OR released OR roadmap OR mainnet OR demo OR "open source") (AI OR agent OR robotics OR Base OR protocol) min_faves:40 has:links -filter:replies',
];

export const TRUSTED_USERNAMES = new Set([
  'ethereum',
  'base',
  'jessepollak',
  'vitalikbuterin',
  'googleai',
  'anthropicai',
  'openai',
  'coinbase',
  'virtuals_io',
  'github',
  'block',
  'replit',
  'huggingface',
  'nvidia',
  'perplexity_ai',
  'cursor_ai',
  'figure_robot',
  'cerebrasystems',
  'runpod_io',
  'openrouterai',
  'vercel',
]);

export const SEARCH_LIMITS = {
  accountsPerRun: 5,
  tweetsPerAccount: 5,
  searchQueriesPerRun: 2,
  tweetsPerQuery: 5,
  maxCandidates: 5,
};
