import { Row, Button, Text } from "@once-ui-system/core";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const previousHref = previousPage === 1 ? "/blog" : `/blog/page/${previousPage}`;
  const nextHref = `/blog/page/${nextPage}`;

  return (
    <Row fillWidth horizontal="between" paddingX="24" vertical="center">
      {previousPage >= 1 ? (
        <Button href={previousHref} variant="tertiary" data-border="rounded" size="m">
          ← Newer posts
        </Button>
      ) : (
        <span />
      )}
      <Text variant="label-default-s" onBackground="neutral-weak">
        Page {currentPage} of {totalPages}
      </Text>
      {nextPage <= totalPages ? (
        <Button href={nextHref} variant="tertiary" data-border="rounded" size="m">
          Older posts →
        </Button>
      ) : (
        <span />
      )}
    </Row>
  );
}
