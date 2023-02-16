import { getSortedPostsData } from '../lib/posts';

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();
  const totalPages = Math.ceil(allPostsData.length / POST_PER_PAGE);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps
// PostList
// index 中也要有PostList，因為getStaticProps不能傳過去
