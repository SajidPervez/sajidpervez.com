import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from '../../chunks/astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/_astro_assets_B5NxTYdv.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_2o9pYEbK.mjs';
import { g as getCollection } from '../../chunks/_astro_content_CtC_LEIH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://sajidpervez.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { id, author, title, cover, pubDate, url, altText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4"> <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"> ${renderComponent($$result, "Image", $$Image, { "src": cover, "alt": altText, "class": "w-full h-48 object-cover" })} <div class="p-6"> <h2 class="text-xl font-bold mb-2"> <a${addAttribute(`/blog/${id}`, "href")}>${title}</a> </h2> <span> <h5 class="font-medium text-gray-700">${author}</h5> <p class="text-gray-500 text-sm">Published on: ${pubDate}</p> </span> </div> </div></div>`;
}, "/home/sajid/sajidpervez.com/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://sajidpervez.com");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.data.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  await getCollection("blog");
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Posts tagged with ${tag}</p> <ul> ${posts.map(
    (post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.data.canonicalURL, "title": post.data.title, "author": post.data.author, "pubDate": post.data.pubDate, "cover": post.data.cover, "altText": post.data.altText, "id": post.slug })}`
  )} </ul> ` })}`;
}, "/home/sajid/sajidpervez.com/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/sajid/sajidpervez.com/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
