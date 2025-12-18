import { getPosts } from "@/utils/utils";
import { baseURL, person, tags as tagsPage } from "@/resources";
import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { slugify } from "transliteration";
import { TagsClient } from "./TagsClient";
import type { TagSummary } from "./types";

function collectTags(posts: any[]): TagSummary[] {
  const tagMap = new Map<string, TagSummary>();

  posts.forEach((post) => {
    (post.metadata.tags || []).forEach((label: string) => {
      const slug = slugify(label).toLowerCase();
      const current = tagMap.get(slug);
      if (current) {
        current.count += 1;
      } else {
        tagMap.set(slug, { label, slug, count: 1 });
      }
    });
  });

  return Array.from(tagMap.values()).sort((a, b) => a.label.localeCompare(b.label));
}

export async function generateMetadata() {
  return Meta.generate({
    title: tagsPage.title,
    description: tagsPage.description,
    baseURL,
    path: tagsPage.path,
    image: `/api/og/generate?title=${encodeURIComponent(tagsPage.title)}`,
  });
}

export default function TagsIndex() {
  const posts = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    metadata: post.metadata,
    slug: post.slug,
  }));
  const tagSummaries = collectTags(posts);

  return (
    <Column maxWidth="m" paddingTop="24" gap="32">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={tagsPage.title}
        description={tagsPage.description}
        path={tagsPage.path}
        image={`/api/og/generate?title=${encodeURIComponent(tagsPage.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${tagsPage.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column paddingX="24" gap="12">
        <Heading variant="heading-strong-xl">{tagsPage.title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {tagsPage.description}
        </Text>
      </Column>

      <TagsClient tagSummaries={tagSummaries} posts={posts} />
    </Column>
  );
}
