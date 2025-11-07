import { notFound } from "next/navigation";
import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Pagination } from "@/components/blog/Pagination";
import { baseURL, blog, person } from "@/resources";
import { getPaginatedPosts } from "@/utils/blog";

type PageParams = {
  page: string;
};

export function generateStaticParams() {
  const { totalPages } = getPaginatedPosts(1);
  return Array.from({ length: totalPages }, (_, index) => ({ page: String(index + 1) })).slice(1);
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { page } = await params;
  const pageNumber = Number(page);
  const { totalPages } = getPaginatedPosts(pageNumber);

  if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
    return Meta.generate({ title: blog.title, description: blog.description, baseURL, path: blog.path });
  }

  const title = `${blog.title} – Page ${pageNumber}`;

  return Meta.generate({
    title,
    description: blog.description,
    baseURL,
    path: `${blog.path}/page/${pageNumber}`,
    image: `/api/og/generate?title=${encodeURIComponent(title)}`,
  });
}

export default async function BlogPage({ params }: { params: Promise<PageParams> }) {
  const { page } = await params;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber < 1) {
    notFound();
  }

  const { paginatedPosts, totalPages, currentPage } = getPaginatedPosts(pageNumber);

  if (currentPage !== pageNumber) {
    notFound();
  }

  const featuredPost = paginatedPosts[0];
  const remainingPosts = paginatedPosts.slice(1);

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={`${blog.title} – Page ${currentPage}`}
        description={blog.description}
        path={`${blog.path}/page/${currentPage}`}
        image={`/api/og/generate?title=${encodeURIComponent(`${blog.title} – Page ${currentPage}`)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="16" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        {featuredPost ? (
          <Posts posts={[featuredPost]} thumbnail direction="column" />
        ) : (
          <Text variant="body-default-m" onBackground="neutral-weak" marginLeft="24">
            No posts yet—stay tuned.
          </Text>
        )}

        {remainingPosts.length > 0 && (
          <Posts posts={remainingPosts} columns="2" thumbnail direction="column" />
        )}

        <Pagination currentPage={currentPage} totalPages={totalPages} />

        <Mailchimp marginBottom="l" />
      </Column>
    </Column>
  );
}
