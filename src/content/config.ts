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

const booksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.string(),
    comments: z.string(),
    url: z.string().url(),
    status: z.string(),
    
  }),
});

const podcastsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    host: z.string(),
    description: z.string(),
    cover: z.string(),
    url: z.string().url(),
  }),
});

// Define a collection schema for merch items
const merchCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    cover: z.string(),
    purchaseLinks: z.array(
      z.object({
        platform: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});


// Define a collection schema for experiences items
const experiencesCollection = defineCollection({
      type: "content",
      schema: z.object({
        title: z.string(),
        organization: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        period: z.string(),
        description: z.string(),
        cover: z.string(),
        url: z.string().url(),
      }),
  });

export const collections = {
  'blog': blogCollection,
  'authors': authorCollection,
  'books': booksCollection,
  'podcasts': podcastsCollection,
  'merch': merchCollection,
  'experiences': experiencesCollection,
};
