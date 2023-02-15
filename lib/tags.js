import fs from 'fs';
import path from 'path';
import { getPostData } from './posts';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getFilteredTagsData(tag) {
  const fileNames = fs.readdirSync(postsDirectory);
  const filteredTagsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return filteredTagsData.filter((post) => post.tags.includes(tag));
}

export async function getAllTags() {
  let tagCount = {};
  const fileNames = fs.readdirSync(postsDirectory);

  for (const fileName of fileNames) {
    const post = await getPostData(fileName.replace(/\.md$/, ''));
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
