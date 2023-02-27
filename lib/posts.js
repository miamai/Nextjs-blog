import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sanitizeHtml from 'sanitize-html';
import rehypeHighlight from 'rehype-highlight';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPosts() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    // Read markdown file as string
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const excerpt = sanitizeHtml(matterResult.content, {
      allowedTags: [],
      allowedAttributes: {},
      textFilter: function (text) {
        return text.replace(/(&gt;|\#{1,6})/g, ' ');
      },
    }).substring(0, 110);

    return {
      id,
      excerpt,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const mdxSource = await serialize(fileContents.split('---')[2], {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });
  const mdxContent = mdxSource.compiledSource;

  return {
    id,
    mdxContent,
    ...matterResult.data, //frontmatter
  };
}
