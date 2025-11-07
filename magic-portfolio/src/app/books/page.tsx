import { Column, Grid, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { books, baseURL, library, person } from "@/resources";
import { BookCard } from "@/components/books/BookCard";

export async function generateMetadata() {
  return Meta.generate({
    title: library.title,
    description: library.description,
    baseURL,
    path: library.path,
    image: `/api/og/generate?title=${encodeURIComponent(library.title)}`,
  });
}

export default function BooksPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="32">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={library.title}
        description={library.description}
        path={library.path}
        image={`/api/og/generate?title=${encodeURIComponent(library.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${library.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column paddingX="24" gap="12">
        <Heading variant="heading-strong-xl">Library</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {library.description}
        </Text>
      </Column>

      <Grid columns="3" s={{ columns: 1 }} gap="24" paddingX="24">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </Grid>
    </Column>
  );
}
