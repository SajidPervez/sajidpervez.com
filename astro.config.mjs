import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://sajidpervez.com",
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true
    },
    remarkPlugins: [],
    rehypePlugins: []
  },
  integrations: [preact({
    compat: true
  }), icon(), mdx(), react(), tailwind()],
  output: "server",
  adapter: vercel()
});