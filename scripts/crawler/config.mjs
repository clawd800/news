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
    name: 'Anthropic Blog',
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
    name: 'Vercel Blog',
    url: 'https://vercel.com/atom',
    sourceType: 'official-blog',
  },
  {
    name: 'GitHub Blog',
    url: 'https://github.blog/feed/',
    sourceType: 'official-blog',
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
      'blog.google',
      'github.blog',
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
      'rekt.news',
      'cointelegraph.com',
    ],
    sourceType: 'media-search',
  },
];
