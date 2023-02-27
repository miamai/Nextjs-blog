import fs from 'fs';
import path from 'path';
import { getPostData, getSortedPosts } from './posts';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getFilteredTagsData(tag) {
  const sortedPosts = getSortedPosts();
  const filteredData = sortedPosts.filter((post) => post.tags.includes(tag));
  return filteredData;
}

export async function getAllTags() {
  let tagCount = {};
  const fileNames = fs.readdirSync(postsDirectory);

  for (const fileName of fileNames) {
    const post = await getPostData(fileName.replace(/\.mdx$/, ''));
    const tags = post.tags;

    if (tags) {
      tags.forEach((tag) => {
        if (tag) {
          tagCount[tag] = tagCount[tag] ? tagCount[tag] + 1 : 1;
        }
      });
    }
  }
  return tagCount;
}
