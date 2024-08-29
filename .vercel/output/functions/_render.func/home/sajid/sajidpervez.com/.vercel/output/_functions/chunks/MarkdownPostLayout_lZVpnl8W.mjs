import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_2o9pYEbK.mjs';

const $$Astro = createAstro("https://sajidpervez.com");
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter, Content } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.pageTitle, "<header": true, "class": "mb-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold"> ${frontmatter.title} </h1> <div class="tags"> ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag"> <a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a> </p>`)} </div> <p class="text-gray-500">
By ${frontmatter.author} on ${frontmatter.pubDate.toString()} </p> <main class="max-w-3xl mx-auto"> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "/home/sajid/sajidpervez.com/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
