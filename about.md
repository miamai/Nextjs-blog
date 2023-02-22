### 網站架構

這是以 Next js 寫成的部落格，並用 Vercel 架站!
用 gray-matter 解析 YAML 格式的 front-matter 後，remark 插件再來解析 markdown，形成 HTML 文章。

### 檔案規劃

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

### 網站路徑

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
