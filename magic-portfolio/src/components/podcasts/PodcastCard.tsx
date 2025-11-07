import { Button, Card, Column, Media, Text } from "@once-ui-system/core";
import type { Podcast } from "@/types";

interface PodcastCardProps {
  podcast: Podcast;
}

export function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <Card
      as="article"
      radius="l"
      padding="16"
      background="surface"
      border="neutral-alpha-weak"
      gap="16"
      direction="column"
    >
      <Media
        radius="m"
        src={podcast.cover.src}
        alt={podcast.cover.alt || podcast.name}
        aspectRatio="1 / 1"
        sizes="(max-width: 768px) 100vw, 280px"
      />
      <Column gap="12">
        <Column gap="4">
          <Text variant="heading-strong-m" wrap="balance">
            {podcast.name}
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Hosted by {podcast.host}
          </Text>
        </Column>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {podcast.description}
        </Text>
        <Button
          href={podcast.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          data-border="rounded"
          size="s"
        >
          Listen
        </Button>
      </Column>
    </Card>
  );
}
