import { getPosts } from "@/utils/utils";

export const POSTS_PER_PAGE = 6;

export function getAllPostsSorted() {
  return getPosts(["src", "app", "blog", "posts"]).sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
}

export function getPaginatedPosts(page: number) {
  const allPosts = getAllPostsSorted();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;

  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  return {
    allPosts,
    paginatedPosts,
    totalPages,
    currentPage,
  };
}
