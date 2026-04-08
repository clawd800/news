export const PRIORITY_X_ACCOUNTS = [
  'base',
  'GoogleAI',
  'AnthropicAI',
  'openai',
  'ethereum',
  'jessepollak',
  'coinbase',
  'VitalikButerin',
  'virtuals_io',
  'figure_robot',
  'huggingface',
  'nvidia',
  'openrouterai',
  'a16zcrypto',
  'coindesk',
  'techcrunch',
  'banklessHQ',
  'Cointelegraph',
  'cryptoslate',
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
  'perplexity_ai',
  'cursor_ai',
  'figure_robot',
  'cerebrasystems',
  'runpod_io',
  'openrouterai',
  'vercel',
  'replit',
  'huggingface',
  'nvidia',
  'a16zcrypto',
  'coindesk',
  'techcrunch',
  'verge',
  'banklesshq',
  'cointelegraph',
  'cryptoslate',
  'dlnews_info',
]);

export const SEARCH_LIMITS = {
  accountsPerRun: 12,
  tweetsPerAccount: 5,
  searchQueriesPerRun: 4,
  tweetsPerQuery: 6,
  maxCandidates: 8,
};

export const GITHUB_RELEASE_REPOS = [
  'google-ai-edge/LiteRT-LM',
  'block/goose',
  'anthropics/anthropic-cookbook',
  'huggingface/transformers',
  'microsoft/onnxruntime',
];

export const RSS_FEEDS = [
  {
    name: 'OpenAI News',
    url: 'https://openai.com/news/rss.xml',
    sourceType: 'official-blog',
  },
  {
    name: 'Anthropic News',
    url: 'https://www.anthropic.com/news/rss.xml',
    sourceType: 'official-blog',
  },
  {
    name: 'Google AI Blog',
    url: 'https://blog.google/technology/ai/rss/',
    sourceType: 'official-blog',
  },
  {
    name: 'Google Developers Blog',
    url: 'https://developers.googleblog.com/feeds/posts/default',
    sourceType: 'official-blog',
  },
  {
    name: 'NVIDIA Blog',
    url: 'https://blogs.nvidia.com/feed/',
    sourceType: 'official-blog',
  },
  {
    name: 'GitHub Blog',
    url: 'https://github.blog/feed/',
    sourceType: 'official-blog',
  },
  {
    name: 'Vercel Blog',
    url: 'https://vercel.com/atom',
    sourceType: 'official-blog',
  },
  {
    name: 'TechCrunch',
    url: 'https://techcrunch.com/feed/',
    sourceType: 'media-rss',
  },
  {
    name: 'The Verge',
    url: 'https://www.theverge.com/rss/index.xml',
    sourceType: 'media-rss',
  },
  {
    name: 'CoinDesk',
    url: 'https://www.coindesk.com/arc/outboundfeeds/rss/',
    sourceType: 'media-rss',
  },
  {
    name: 'Decrypt',
    url: 'https://decrypt.co/feed',
    sourceType: 'media-rss',
  },
  {
    name: 'Blockworks',
    url: 'https://blockworks.co/feed',
    sourceType: 'media-rss',
  },
  {
    name: 'Unchained',
    url: 'https://www.unchainedcrypto.com/feed/',
    sourceType: 'media-rss',
  },
  {
    name: 'MIT Technology Review',
    url: 'https://www.technologyreview.com/feed/',
    sourceType: 'media-rss',
  },
  {
    name: 'WIRED AI',
    url: 'https://www.wired.com/feed/tag/ai/latest/rss',
    sourceType: 'media-rss',
  },
];

export const JINA_MEDIA_SEARCHES = [
  {
    name: 'AI media launch search',
    query: 'AI agent launch OR open source AI OR model release OR robotics demo',
    sites: [
      'theverge.com',
      'techcrunch.com',
      'venturebeat.com',
      'semafor.com',
      'github.blog',
      'wired.com',
      'technologyreview.com',
    ],
    sourceType: 'media-search',
  },
  {
    name: 'Web3 media launch search',
    query: 'crypto launch OR protocol launch OR stablecoin rollout OR mainnet OR acquisition',
    sites: [
      'coindesk.com',
      'decrypt.co',
      'theblock.co',
      'thedefiant.io',
      'blockworks.com',
      'unchainedcrypto.com',
      'bankless.com',
      'cointelegraph.com',
      'cryptoslate.com',
      'dlnews.com',
    ],
    sourceType: 'media-search',
  },
];
