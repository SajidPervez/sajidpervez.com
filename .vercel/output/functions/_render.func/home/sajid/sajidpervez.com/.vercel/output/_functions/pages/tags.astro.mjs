import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_2o9pYEbK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sajidpervez.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Tags";
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/blog/post-1.md": () => import('../chunks/post-1_yWZLyDZ_.mjs'),"../../content/blog/post-2.md": () => import('../chunks/post-2_CtesplZq.mjs'),"../../content/blog/post-3.md": () => import('../chunks/post-3_BDsS3k_6.mjs'),"../../content/blog/post-4.md": () => import('../chunks/post-4_B5Yk1yku.mjs')}), () => "../../content/blog/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold mb-4">Tags</h1> <div class="tags"> ${tags.map((tag) => renderTemplate`<p class="tag"> <a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a> </p>`)} </div> ` })}`;
}, "/home/sajid/sajidpervez.com/src/pages/tags/index.astro", void 0);

const $$file = "/home/sajid/sajidpervez.com/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
