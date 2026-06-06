import { SITE_URL } from "../i18n/seo";

// Explicitly welcome AI/search crawlers so the site can be cited by
// ChatGPT, Perplexity, Claude, Google AI Overviews and Bing Copilot.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
  "Bingbot"
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" }))
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
