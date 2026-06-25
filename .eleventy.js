const CRYPTO_TAGS = new Set([
  "aave",
  "account-abstraction",
  "arbitrum",
  "base",
  "bitcoin",
  "blockchain",
  "bridge",
  "coinbase",
  "crypto",
  "crypto-markets",
  "crypto-policy",
  "crypto-treasury",
  "defi",
  "digital-assets",
  "ethereum",
  "etf",
  "layer-1",
  "layer2",
  "mining",
  "monad",
  "onchain-credit",
  "polymarket",
  "prediction-markets",
  "restaking",
  "rwa",
  "solana",
  "stablecoin",
  "stablecoins",
  "staking",
  "stellar",
  "sui",
  "tokenization",
  "tokenized-securities",
  "usdc",
  "validator-clients",
  "web3",
  "web3-infra",
  "xrp",
]);

const AI_TAGS = new Set([
  "agentic-ai",
  "agents",
  "ai",
  "ai-agents",
  "ai-gateway",
  "ai-infrastructure",
  "ai-safety",
  "anthropic",
  "autonomous-vehicles",
  "chatgpt",
  "claude",
  "claude-code",
  "codex",
  "copilot",
  "edge-ai",
  "embodied-ai",
  "enterprise-ai",
  "generative-ai",
  "gemini",
  "humanoid",
  "humanoid-robots",
  "llm",
  "model-routing",
  "multimodal",
  "on-device-ai",
  "open-models",
  "openai",
  "perplexity",
  "physical-ai",
  "robotics",
  "scientific-ai",
  "video-generation",
  "voice-ai",
  "world-models",
  "xai",
]);

const articleTags = (article) =>
  (Array.isArray(article.data.tags) ? article.data.tags : [article.data.tags])
    .filter(Boolean)
    .map((tag) => String(tag).toLowerCase());

const hasAnyTag = (article, tagSet) =>
  articleTags(article).some((tag) => tagSet.has(tag));

module.exports = function (eleventyConfig) {
  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
  eleventyConfig.addPassthroughCopy("news/**/*.{jpg,jpeg,png,gif,webp,svg,mp4}");
  eleventyConfig.addPassthroughCopy({ "src/.well-known": ".well-known" });

  // Ignore non-content markdown at root
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("CONTRIBUTING.md");
  eleventyConfig.ignores.add("SKILL.md");
  eleventyConfig.ignores.add("scripts/**/*.md");

  // Date filters
  eleventyConfig.addFilter("isoDate", (date) =>
    new Date(date).toISOString().split("T")[0]
  );

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  eleventyConfig.addFilter("toISOString", (date) =>
    new Date(date).toISOString()
  );

  // Convert @handle to X (Twitter) profile URL
  eleventyConfig.addFilter("authorUrl", (author) => {
    if (!author) return "#";
    const handle = author.replace(/^@/, "");
    return `https://x.com/${handle}`;
  });

  // Reading time
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const words = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  });

  // Group articles by date (returns [[dateStr, articles[]]] sorted newest first)
  eleventyConfig.addFilter("groupByDate", (articles) => {
    const groups = {};
    for (const a of articles) {
      const d = a.data.date;
      const key = d instanceof Date ? d.toISOString().split("T")[0] : String(d);
      if (!groups[key]) groups[key] = [];
      groups[key].push(a);
    }
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  });

  // Open external links in new tab (compile-time transform)
  eleventyConfig.addTransform("externalLinks", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        /<a\s+href="(https?:\/\/[^"]+)"/g,
        (match, url) => {
          if (url.includes("news.800.works")) return match;
          return `<a href="${url}" target="_blank" rel="noopener noreferrer"`;
        }
      );
    }
    return content;
  });

  const getSortedArticles = (api) =>
    api
      .getFilteredByGlob("news/*/*/index.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  // Sorted article collection
  eleventyConfig.addCollection("article", getSortedArticles);

  // Latest articles for feed outputs
  eleventyConfig.addCollection("feedArticle", (api) =>
    getSortedArticles(api).slice(0, 50)
  );

  eleventyConfig.addCollection("cryptoFeedArticle", (api) =>
    getSortedArticles(api)
      .filter((article) => hasAnyTag(article, CRYPTO_TAGS))
      .slice(0, 50)
  );

  eleventyConfig.addCollection("aiFeedArticle", (api) =>
    getSortedArticles(api)
      .filter((article) => hasAnyTag(article, AI_TAGS))
      .slice(0, 50)
  );

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "src/_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
