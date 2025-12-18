import mdx from "@next/mdx";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  outputFileTracingRoot: path.join(__dirname),
  outputFileTracingIncludes: {
    "/app/tags/page": ["./src/app/blog/posts/**/*", "./src/app/work/projects/**/*"],
    "/app/blog/[slug]/page": ["./src/app/blog/posts/**/*"],
    "/app/work/[slug]/page": ["./src/app/work/projects/**/*"],
    "/app/api/rss/route": ["./src/app/blog/posts/**/*", "./src/app/work/projects/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
