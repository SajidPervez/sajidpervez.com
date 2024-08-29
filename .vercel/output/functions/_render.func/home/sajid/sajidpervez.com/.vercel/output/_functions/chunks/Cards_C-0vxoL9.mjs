import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from './astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_B5NxTYdv.mjs';
import { g as getCollection } from './_astro_content_CtC_LEIH.mjs';

const $$Cards = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getCollection("blog");
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4"> ${blogPosts.map((post) => renderTemplate`<div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-50"> ${renderComponent($$result, "Image", $$Image, { "src": post.data.cover, "alt": post.data.altText, "class": "w-full h-48 object-cover" })} <div class="p-6"> <h2 class="text-xl font-bold mb-2"> <a${addAttribute(`/blog/${post.slug}`, "href")}>${post.data.title}</a> </h2> <span> <h5 class="font-medium text-gray-700">${post.data.author}</h5> <p class="text-gray-500 text-sm">Published on: ${post.data.pubDate.toDateString().slice(0, 10)}</p> </span> </div> </div>`)} </div>`;
}, "/home/sajid/sajidpervez.com/src/components/Cards.astro", void 0);

export { $$Cards as $ };
