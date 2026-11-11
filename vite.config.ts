import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { site } from "./src/data/site";

// Fills the page title and the search description into index.html from src/data/site.ts, so they are changed in the same
// place as the rest of the words on the site. The text is escaped, so a quote or a < in it cannot break out of the tag.
function pageInfo(): Plugin {
  const escape = (text: string) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return {
    name: "page-info",
    transformIndexHtml: (html) =>
      html
        .replace("%PAGE_TITLE%", () => escape(site.title))
        .replace("%PAGE_DESCRIPTION%", () => escape(site.description))
        .replace("<!--SHARE_TAGS-->", () => shareTags(escape)),
  };
}

// The tags that set the title, text and picture shown when the home page is shared on Facebook, in a text, or on X.
// They need full addresses, so they are only written once site.siteUrl is set.
function shareTags(escape: (text: string) => string): string {
  if (!site.siteUrl) {
    console.warn("[page-info] site.siteUrl is empty in src/data/site.ts, so the share-preview tags were left out.");
    return "";
  }
  const image = escape(`${site.siteUrl}${site.shareImage}`);
  const tag = (attr: string, name: string, value: string) => `<meta ${attr}="${name}" content="${value}" />`;
  return [
    tag("property", "og:type", "website"),
    tag("property", "og:site_name", escape(site.name)),
    tag("property", "og:title", escape(site.title)),
    tag("property", "og:description", escape(site.shareDescription)),
    tag("property", "og:url", escape(`${site.siteUrl}/`)),
    tag("property", "og:image", image),
    tag("property", "og:image:width", "1200"),
    tag("property", "og:image:height", "630"),
    tag("name", "twitter:card", "summary_large_image"),
    tag("name", "twitter:title", escape(site.title)),
    tag("name", "twitter:description", escape(site.shareDescription)),
    tag("name", "twitter:image", image),
  ].join("\n    ");
}

export default defineConfig({
  plugins: [react(), pageInfo()],
});
