import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";


import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://sajidpervez.com",
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true,
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
  integrations: [
    preact(),
    icon(),
    mdx(),
  ],
  output: "server",
  adapter: vercel()
});