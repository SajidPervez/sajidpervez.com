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
    cover: z.object({
      src: z.string(),
      alt: z.string()
    }),
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
    description: z.string(),
    cover: z.array(z.object({
      src: z.string(),
      alt: z.string()
    })),
    canonicalURL: z.string().url(),
  })
});

const booksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.object({
      src: z.string(),
      alt: z.string()
    }),
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
    cover: z.object({
      src: z.string(),
      alt: z.string()
    }),
    url: z.string().url(),
  }),
});

const merchCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    cover: z.object({
      src: z.string(),
      alt: z.string()
    }),
    purchaseLinks: z.array(
      z.object({
        platform: z.string(),
        url: z.string().url(),
      })
    ),
  }),
});

const experiencesCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    period: z.string(),
    description: z.string(),
    cover: z.object({
      src: z.string(),
      alt: z.string()
    }),
    url: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
  books: booksCollection,
  podcasts: podcastsCollection,
  merch: merchCollection,
  experiences: experiencesCollection,
};
