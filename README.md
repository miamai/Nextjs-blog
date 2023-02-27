# Nextjs Blog

這是以 Next js 寫成的部落格，並用 Vercel 架站!
用 gray-matter 解析 YAML 格式的 front-matter 後，MDX Remote 插件再來解析 : `serialize`會返回 MDX 字串，在 server-side 運行，傳至`<MDXRemote />`，`<MDXRemote />`則是在 client-side 運行，解析呈現到網頁上。

[文件 : Next MDX Remote](https://github.com/hashicorp/next-mdx-remote)

### Project structure

```
$ROOT
│   # Page files
├── pages
│   # React components
├── components
│   # Data fetching hooks
├── lib
│   # Markdown
├── posts
│   # Styling
├── styles
│   # Static files for images
└── public

```

components 檔案中的 Seo.js 負責 html head 中的 title, og 等相關資料處理。

### Blog Path

```
$INDEX
├── `/[page]`
│
├── `/projects`
│
├── `/posts/[id]` - 有 data hooks
│
└── `/tags/[tag]` - 有 data hooks
```

以上是簡單介紹，有任何問題歡迎寄信給我:)
