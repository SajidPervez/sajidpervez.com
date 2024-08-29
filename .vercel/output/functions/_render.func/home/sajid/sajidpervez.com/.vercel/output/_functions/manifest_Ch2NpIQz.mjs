import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_DgKTQ1P8.mjs';
import { g as decodeKey } from './chunks/astro/server_DwZ9SlxK.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sajid/sajidpervez.com/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ZS3wsSy.js"}],"styles":[{"type":"external","src":"/_astro/output.r6LRZm8H.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ZS3wsSy.js"}],"styles":[{"type":"external","src":"/_astro/output.r6LRZm8H.css"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ZS3wsSy.js"}],"styles":[{"type":"external","src":"/_astro/output.r6LRZm8H.css"}],"routeData":{"route":"/posts/post-1","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-1\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-1.md","pathname":"/posts/post-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ZS3wsSy.js"}],"styles":[{"type":"external","src":"/_astro/output.r6LRZm8H.css"}],"routeData":{"route":"/posts/post-2","isIndex":false,"type":"page","pattern":"^\\/posts\\/post-2\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/post-2.md","pathname":"/posts/post-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ZS3wsSy.js"}],"styles":[{"type":"external","src":"/_astro/output.r6LRZm8H.css"}],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ZS3wsSy.js"}],"styles":[{"type":"external","src":"/_astro/output.r6LRZm8H.css"}],"routeData":{"route":"/tags/[tag]","isIndex":false,"type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ZS3wsSy.js"}],"styles":[{"type":"external","src":"/_astro/output.r6LRZm8H.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted._ZS3wsSy.js"}],"styles":[{"type":"external","src":"/_astro/output.r6LRZm8H.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://sajidpervez.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/sajid/sajidpervez.com/src/components/Cards.astro",{"propagation":"in-tree","containsHead":false}],["/home/sajid/sajidpervez.com/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/sajid/sajidpervez.com/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sajid/sajidpervez.com/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sajid/sajidpervez.com/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sajid/sajidpervez.com/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/sajid/sajidpervez.com/src/pages/tags/index.astro",{"propagation":"none","containsHead":true}],["/home/sajid/sajidpervez.com/src/pages/posts/post-1.md",{"propagation":"none","containsHead":true}],["/home/sajid/sajidpervez.com/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["/home/sajid/sajidpervez.com/src/pages/posts/post-2.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-page:src/pages/posts/post-1@_@md":"pages/posts/post-1.astro.mjs","\u0000@astro-page:src/pages/posts/post-2@_@md":"pages/posts/post-2.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/home/sajid/sajidpervez.com/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/home/sajid/sajidpervez.com/src/content/authors/about.md?astroContentCollectionEntry=true":"chunks/about_D4prjZO4.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-1.md?astroContentCollectionEntry=true":"chunks/post-1_DZWUrArM.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-2.md?astroContentCollectionEntry=true":"chunks/post-2_BGwZI8dw.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-3.md?astroContentCollectionEntry=true":"chunks/post-3_DbJJf-71.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-4.md?astroContentCollectionEntry=true":"chunks/post-4_BCsa32vZ.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-5.mdx?astroContentCollectionEntry=true":"chunks/post-5_CO7BhbkJ.mjs","/home/sajid/sajidpervez.com/src/content/authors/about.md?astroPropagatedAssets":"chunks/about_Bp_0_Q5d.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-1.md?astroPropagatedAssets":"chunks/post-1_BAsQPpvo.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-2.md?astroPropagatedAssets":"chunks/post-2_BixbmRxG.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-3.md?astroPropagatedAssets":"chunks/post-3_BqoWQcAS.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-4.md?astroPropagatedAssets":"chunks/post-4_BAP-OhBg.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-5.mdx?astroPropagatedAssets":"chunks/post-5_BbunXbOh.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-1.md":"chunks/post-1_yWZLyDZ_.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-2.md":"chunks/post-2_CtesplZq.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-3.md":"chunks/post-3_BDsS3k_6.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-4.md":"chunks/post-4_B5Yk1yku.mjs","/home/sajid/sajidpervez.com/src/content/authors/about.md":"chunks/about_Ch3SdevW.mjs","/home/sajid/sajidpervez.com/src/content/blog/post-5.mdx":"chunks/post-5_6Y88yrQq.mjs","\u0000@astrojs-manifest":"manifest_Ch2NpIQz.mjs","@astrojs/preact/client.js":"_astro/client.VI2hlySz.js","/astro/hoisted.js?q=0":"_astro/hoisted._ZS3wsSy.js","/home/sajid/sajidpervez.com/src/components/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.BXnCfsbN.js","/home/sajid/sajidpervez.com/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.CKUtNxEv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/CanelaDeck-Light.D6rsN-dp.woff","/_astro/CanelaText-Light.CYw8uvC-.woff","/_astro/CanelaDeck-Bold.FVMbG37m.woff","/_astro/CanelaDeck-Regular.BZGhLVQr.woff","/_astro/CanelaText-Medium.DD81FIko.woff","/_astro/CanelaText-LightItalic.CWiD2uip.woff","/_astro/post-1-cover.xUQltrRE.jpg","/_astro/Sajid-2.De6RvAJr.jpeg","/_astro/Sajid-3.DBkci7sY.jpeg","/_astro/Sajid-1.CNauPVo1.jpeg","/_astro/output.r6LRZm8H.css","/_astro/Navigation.astro_astro_type_script_index_0_lang.BXnCfsbN.js","/_astro/client.VI2hlySz.js","/_astro/client.jBTnOAOa.js","/_astro/hoisted._ZS3wsSy.js","/_astro/signals.module.CKUtNxEv.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"mQD5S2dTvj8IYEWy43zoQJHdMAKZX8oh9Gqu0Vf2C0k=","experimentalEnvGetSecretEnabled":false});

export { manifest };
