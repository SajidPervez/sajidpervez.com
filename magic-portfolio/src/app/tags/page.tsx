import { getPosts } from "@/utils/utils";
import { baseURL, person, tags as tagsPage } from "@/resources";
import { Column, Heading, Meta, Row, Schema, Text, Button } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { slugify } from "transliteration";

type TagSummary = {
  label: string;
  slug: string;
  count: number;
};

function collectTags(): TagSummary[] {
  const posts = getPosts(["src", "app", "blog", "posts"]);
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

function getPostsByTagSlug(slug: string) {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.filter((post) =>
    (post.metadata.tags || []).some((label: string) => slugify(label).toLowerCase() === slug),
  );
}

export default async function TagsIndex({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const tagSummaries = collectTags();
  const selectedValue = resolvedSearchParams.tag;
  const selectedSlug = typeof selectedValue === "string" ? selectedValue.toLowerCase() : undefined;
  const selectedPosts = selectedSlug ? getPostsByTagSlug(selectedSlug) : [];
  const selectedLabel = selectedSlug
    ? tagSummaries.find((entry) => entry.slug === selectedSlug)?.label || selectedSlug
    : undefined;

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

      <Row wrap gap="16" paddingX="24">
        {tagSummaries.length === 0 && (
          <Text variant="body-default-m" onBackground="neutral-weak">
            No tags yet—new posts coming soon.
          </Text>
        )}
        {tagSummaries.map((tag) => (
          <Button
            key={tag.slug}
            href={tag.slug === selectedSlug ? "/tags" : `/tags?tag=${tag.slug}`}
            variant={tag.slug === selectedSlug ? "primary" : "secondary"}
            data-border="rounded"
            size="m"
            weight="default"
          >
            <Row gap="8" vertical="center">
              <Text variant="label-strong-m">#{tag.label}</Text>
              <Text variant="label-default-s" onBackground="neutral-weak">
                {tag.count}
              </Text>
            </Row>
          </Button>
        ))}
      </Row>

      {selectedSlug && (
        <Column gap="24" paddingX="24" paddingBottom="32">
          <Heading variant="heading-strong-l">Posts tagged with #{selectedLabel}</Heading>
          {selectedPosts.length > 0 ? (
            <Posts columns="2" posts={selectedPosts} thumbnail direction="column" />
          ) : (
            <Text variant="body-default-m" onBackground="neutral-weak">
              No posts found for this tag.
            </Text>
          )}
        </Column>
      )}
    </Column>
  );
}
