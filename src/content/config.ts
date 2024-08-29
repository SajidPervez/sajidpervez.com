import { imageConfig } from "astro:assets";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    isDraft: z.boolean(),
    pubDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
    cover: image().optional(),
    altText: z.string(),
    canonicalURL: z.string().url(),
  })
});

const authorCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    isDraft: z.boolean(),
    pubDate: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
    cover: z.array(image().optional()),
    altText: z.string(),
    canonicalURL: z.string().url(),
  })
});
export const collections = {
  'blog': blogCollection,
  'authors': authorCollection,
};
