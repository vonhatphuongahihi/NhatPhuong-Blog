---
sidebar_position: 1
---

# Tạo Trang

Thêm **file Markdown hoặc React** vào `src/pages` để tạo một trang độc lập:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Tạo trang React đầu tiên

Tạo một file tại `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
    return (
        <Layout>
            <h3 className="text-3xl font-bold text-center">Trang React của Võ Nhất Phương</h3>
            <p className="text-center">Đây là một trang React</p>
        </Layout>
    );
}
```

Một trang mới giờ đây có sẵn tại [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Tạo trang Markdown đầu tiên

Tạo một file tại `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# Trang Markdown của Võ Nhất Phương

Đây là một trang Markdown
```

Một trang mới giờ đây có sẵn tại [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).

<p align="center">
**Võ Nhất Phương** hoàn thành✨✨✨.
</p>