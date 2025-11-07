import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Pagination } from "@/components/blog/Pagination";
import { baseURL, blog, person } from "@/resources";
import { getPaginatedPosts } from "@/utils/blog";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  const { paginatedPosts, totalPages } = getPaginatedPosts(1);
  const featuredPost = paginatedPosts[0];
  const remainingPosts = paginatedPosts.slice(1);

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
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

        <Pagination currentPage={1} totalPages={totalPages} />

        <Mailchimp marginBottom="l" />
      </Column>
    </Column>
  );
}
