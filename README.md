# Mia's Homepage

## Project structure

```
$PROJECT_ROOT
│   # Page files
├── pages
│   # React component files
├── components
│   # Non-react modules
├── lib
│   # Static files for images
└── public
```

Araay.from 運用
https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// 產生數值序列
// 因為陣列中的每個位置都會被初始化為 `undefined`，
// 下方 `v` 會是 `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

--Dynamic Route
重要: getStaticPaths!! If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.

https://nextjs.org/docs/routing/dynamic-routes

why the path is '/2' not 'page:2', the params: { page: '2' } look like this?
In Next.js, when you define a dynamic route with a parameter, the value of the parameter is passed as a prop to the page component via the context object. In this case, the page parameter is defined in the file name of the page component, as [page].js.

So, for a page at the path /2, the value of the page parameter would be '2' and would be passed to the page component via the context object. That's why the params object in the getStaticPaths function is set to { page: '2' }, without the "page" key.

However, if you want to use a different format for the path, such as /page2 instead of /2, you can modify the params object to include a "page" key with the desired format. For example:

### 未來更新

1. 改成 MDX 加入 youtube links (remark-frontmatter)
