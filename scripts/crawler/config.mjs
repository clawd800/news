export const PRIORITY_X_ACCOUNTS = [
  'ethereum',
  'base',
  'jessepollak',
  'VitalikButerin',
  'GoogleAI',
  'AnthropicAI',
  'virtuals_io',
];

export const SEARCH_QUERIES = [
  'AI agents min_faves:15',
  'robotics demo min_faves:15',
  'open source AI framework min_faves:15',
  'web3 launch min_faves:15',
  'ethereum ERC min_faves:15',
  'Base L2 min_faves:15',
];

export const TRUSTED_USERNAMES = new Set([
  'ethereum',
  'base',
  'jessepollak',
  'VitalikButerin',
  'GoogleAI',
  'AnthropicAI',
  'OpenAI',
  'coinbase',
  'virtuals_io',
]);

export const SEARCH_LIMITS = {
  accountsPerRun: 2,
  tweetsPerAccount: 5,
  searchQueriesPerRun: 2,
  tweetsPerQuery: 5,
  maxCandidates: 5,
};
