import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_2o9pYEbK.mjs';
import { $ as $$Cards } from '../chunks/Cards_C-0vxoL9.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Blogs";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cards", $$Cards, {})} ` })}`;
}, "/home/sajid/sajidpervez.com/src/pages/blog.astro", void 0);

const $$file = "/home/sajid/sajidpervez.com/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Blog,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
