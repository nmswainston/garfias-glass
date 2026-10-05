import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { site } from "./src/data/site";

// Fills the page title and the search description into index.html from src/data/site.ts, so they are changed in the same
// place as the rest of the words on the site. The text is escaped, so a quote or a < in it cannot break out of the tag.
function pageInfo(): Plugin {
  const escape = (text: string) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return {
    name: "page-info",
    transformIndexHtml: (html) => html.replace("%PAGE_TITLE%", () => escape(site.title)).replace("%PAGE_DESCRIPTION%", () => escape(site.description)),
  };
}

export default defineConfig({
  plugins: [react(), pageInfo()],
});
