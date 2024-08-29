import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_3Ex8ePiw.mjs';
import { manifest } from './manifest_Ch2NpIQz.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/posts/post-1.astro.mjs');
const _page5 = () => import('./pages/posts/post-2.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/tags/_tag_.astro.mjs');
const _page8 = () => import('./pages/tags.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/posts/post-1.md", _page4],
    ["src/pages/posts/post-2.md", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/tags/[tag].astro", _page7],
    ["src/pages/tags/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2d683139-31ac-4bcb-986f-ac162cc667c1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
