import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from '../chunks/astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_2o9pYEbK.mjs';
import 'clsx';
import { $ as $$Cards } from '../chunks/Cards_C-0vxoL9.mjs';
import { g as getCollection } from '../chunks/_astro_content_CtC_LEIH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sajidpervez.com");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { title, subtitle1, subtitle2, backgroundImage, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-b border-gray-700 border-dotted"> <section class="container w-full max-w-7xl mx-auto px-4 py-4 relative flex items-center justify-center h-[400px] bg-cover bg-center "${addAttribute(`background-image: url(${backgroundImage || "/default-background.jpg"})`, "style")}> <div class="  absolute inset-0 "></div> <!-- Overlay --> <div class="relative text-center text-gray-600 z-10"> <h1 class="text-7xl font-extrabold">${title || "Welcome to My Blog"}</h1> <p class="mt-2 text-xl overflow-hidden whitespace-nowrap  animate-none"> ${subtitle1 || "This is a default subtitle for all pages."} </p> <p class="mt-2 text-xl overflow-hidden whitespace-nowrap  animate-none"> ${subtitle2 || "This is a default subtitle for all pages."} <a${addAttribute(link, "href")} class="text-purple-700 font-bold font-canela-text"> MYOB</a> </p> </div> </section> </div>`;
}, "/home/sajid/sajidpervez.com/src/components/HeroSection.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("blog");
  const pageTitle = "Sajid's Corner";
  const heroHeading = "I write cyber essays to learn & share my experiences and insights";
  const subtitle1 = "Write code (when required), tinker with Gen AI tools, read books but listen alot, and play badminton.";
  const subtitle2 = " Leading the change in product security covering all aspects of AppSec @ ";
  const currentEmployerLink = "https://www.myob.com";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": heroHeading, "subtitle1": subtitle1, "subtitle2": subtitle2, "link": currentEmployerLink })}  ${renderComponent($$result2, "Cards", $$Cards, {})}  ` })}`;
}, "/home/sajid/sajidpervez.com/src/pages/index.astro", void 0);

const $$file = "/home/sajid/sajidpervez.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
