import { Card, Column, Media, Text } from "@once-ui-system/core";
import type { Book } from "@/types";

const STATUS_LABEL: Record<Book["status"], string> = {
  "to-read": "To Read",
  reading: "Currently Reading",
  read: "Read",
};

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card
      as="article"
      radius="l"
      padding="16"
      background="surface"
      border="neutral-alpha-weak"
      gap="16"
      direction="column"
      href={book.url}
      transition="micro-medium"
    >
      <Media
        radius="m"
        src={book.cover.src}
        alt={book.cover.alt || book.title}
        aspectRatio="3 / 4"
        sizes="(max-width: 768px) 100vw, 320px"
      />
      <Column gap="12">
        <Column gap="4">
          <Text variant="heading-strong-m" wrap="balance">
            {book.title}
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {book.author}
          </Text>
        </Column>
        <Text variant="body-default-s" onBackground="neutral-weak">
          {book.comments}
        </Text>
        <Text variant="label-default-s" onBackground="neutral-weak">
          {STATUS_LABEL[book.status]}
        </Text>
      </Column>
    </Card>
  );
}
