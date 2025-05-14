---
sidebar_position: 1
---

# Quản Lý Phiên Bản Tài Liệu

Docusaurus có thể quản lý nhiều phiên bản của tài liệu.

## 1. Tạo phiên bản tài liệu

Phát hành phiên bản 1.0 của dự án:

```bash
npm run docusaurus docs:version 1.0
```

Thư mục `docs` được sao chép vào `versioned_docs/version-1.0` và file `versions.json` được tạo ra.

Tài liệu giờ đây có 2 phiên bản:

- `1.0` tại `http://localhost:3000/docs/` cho tài liệu phiên bản 1.0
- `current` tại `http://localhost:3000/docs/next/` cho **tài liệu sắp tới, chưa phát hành**

## 2. Thêm Dropdown phiên bản

Để điều hướng dễ dàng giữa các phiên bản, thêm một dropdown phiên bản.

Chỉnh sửa file `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

Dropdown phiên bản tài liệu sẽ xuất hiện trong navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 3. Cập nhật phiên bản hiện có

Chúng ta có thể chỉnh sửa tài liệu đã được phiên bản hóa trong thư mục tương ứng:

- `versioned_docs/version-1.0/hello.md` cập nhật `http://localhost:3000/docs/hello`
- `docs/hello.md` cập nhật `http://localhost:3000/docs/next/hello`

<p align="center">
**Võ Nhất Phương** hoàn thành✨✨✨.
</p>