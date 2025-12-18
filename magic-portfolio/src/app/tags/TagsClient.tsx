"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { slugify } from "transliteration";
import Post from "@/components/blog/Post";
import type { TagSummary } from "./types";

type TagsClientProps = {
  tagSummaries: TagSummary[];
  posts: any[];
};

export function TagsClient({ tagSummaries, posts }: TagsClientProps) {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("tag")?.toLowerCase();

  const selectedPosts = useMemo(() => {
    if (!selectedSlug) {
      return [];
    }

    return posts.filter((post) =>
      (post.metadata.tags || []).some(
        (label: string) => slugify(label).toLowerCase() === selectedSlug,
      ),
    );
  }, [posts, selectedSlug]);

  const selectedLabel = selectedSlug
    ? tagSummaries.find((entry) => entry.slug === selectedSlug)?.label || selectedSlug
    : undefined;

  return (
    <>
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
            <Grid columns="2" s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
              {selectedPosts.map((post) => (
                <Post key={post.slug} post={post} thumbnail direction="column" />
              ))}
            </Grid>
          ) : (
            <Text variant="body-default-m" onBackground="neutral-weak">
              No posts found for this tag.
            </Text>
          )}
        </Column>
      )}
    </>
  );
}
