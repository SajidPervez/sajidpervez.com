import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DwZ9SlxK.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_2o9pYEbK.mjs';
import { g as getCollection } from '../chunks/_astro_content_CtC_LEIH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sajidpervez.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const aboutContent = await getCollection("authors", ({ slug }) => slug === "about");
  const pageTitle = Astro2.props;
  if (!aboutContent.length) {
    throw new Error("No content found for 'about'.");
  }
  const { data, render } = aboutContent[0];
  const coverImages = data.cover || "/src/assets/Sajid.jpg";
  const { Content } = await render();
  function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  const imagePath = getRandomImage(coverImages);
  console.log("imagePath:", imagePath);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-6 py-16"> <div class="flex flex-col md:flex-row items-center"> <!-- Column 1: Text --> <div class="md:w-2/3"> <span><h3 class="text-2xl font-bold mb-2">About</h3></span> <h1 class="text-8xl font-bold mb-2">${data.title}</h1> <span><h2 class="text-3xl font-extrabold mb-6">Application security, security architecture, coding, writing, plyaing badminton & family.</h2></span> ${renderComponent($$result2, "Content", Content, {})} </div> <!-- Column 2: Image --> <div class="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0"> <img${addAttribute(imagePath.src, "src")}${addAttribute(data.altText, "alt")} class="rounded-full w-64 h-64 object-cover sajid"> </div> </div> </section> ` })}`;
}, "/home/sajid/sajidpervez.com/src/pages/about.astro", void 0);

const $$file = "/home/sajid/sajidpervez.com/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
