---
sidebar_position: 2
---

# Dịch Trang Web

Dịch `docs/intro.md` sang tiếng Pháp.

## 1. Cấu hình i18n

Chỉnh sửa `docusaurus.config.js` để thêm hỗ trợ cho locale `fr`:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## 2. Dịch một tài liệu

Sao chép file `docs/intro.md` vào thư mục `i18n/fr`:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Dịch `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` sang tiếng Pháp.

## 3. Khởi động trang web đã được dịch

Khởi động trang web của bạn với locale tiếng Pháp:

```bash
npm run start -- --locale fr
```

Trang web đã được dịch và có thể truy cập tại [http://localhost:3000/fr/](http://localhost:3000/fr/) và trang `Getting Started` đã được dịch.

:::caution

Trong quá trình phát triển, chỉ có thể sử dụng một locale tại một thời điểm.

:::

## 4. Thêm Dropdown Ngôn ngữ

Để điều hướng dễ dàng giữa các ngôn ngữ, thêm một dropdown ngôn ngữ.

Chỉnh sửa file `docusaurus.config.js`:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

Dropdown ngôn ngữ giờ đây xuất hiện trong navbar:

![Locale Dropdown](./img/localeDropdown.png)

## 5. Build trang web đã được dịch

Build trang web cho một locale cụ thể:

```bash
npm run build -- --locale fr
```

Hoặc build trang web để bao gồm tất cả các locale cùng một lúc:

```bash
npm run build
```
<p align="center">
**Võ Nhất Phương** hoàn thành✨✨✨.
</p>