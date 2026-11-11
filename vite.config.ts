import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { site } from "./src/data/site";

/** Makes a value safe to place inside an HTML attribute. */
const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/**
 * Fills the page title, the search description and the share-preview tags (Facebook, texts, X)
 * into index.html from src/data/site.ts, so index.html itself never needs editing.
 * The share tags need full addresses, so they are only written once site.siteUrl is set.
 */
function siteMeta(): Plugin {
  return {
    name: "site-meta",
    transformIndexHtml(html) {
      const tags = [
        `<title>${esc(site.title)}</title>`,
        `<meta name="description" content="${esc(site.description)}" />`,
      ];

      if (site.siteUrl) {
        const image = `${site.siteUrl}${site.shareImage}`;
        tags.push(
          `<meta property="og:type" content="website" />`,
          `<meta property="og:site_name" content="${esc(site.name)}" />`,
          `<meta property="og:title" content="${esc(site.title)}" />`,
          `<meta property="og:description" content="${esc(site.shareDescription)}" />`,
          `<meta property="og:url" content="${esc(site.siteUrl)}/" />`,
          `<meta property="og:image" content="${esc(image)}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${esc(site.title)}" />`,
          `<meta name="twitter:description" content="${esc(site.shareDescription)}" />`,
          `<meta name="twitter:image" content="${esc(image)}" />`,
        );
      } else {
        console.warn(
          "[site-meta] site.siteUrl is empty in src/data/site.ts, so the share-preview tags were left out.",
        );
      }

      return html.replace("<!--site-meta-->", tags.join("\n    "));
    },
  };
}

export default defineConfig({
  plugins: [react(), siteMeta()],
});
