---
sidebar_position: 1
---

# Tổng Quan Về Docusaurus

<p align="justify">
Docusaurus là một công cụ xây dựng trang web tĩnh (static site generator) được phát triển để tạo các trang tài liệu, blog và trang web tối ưu hóa. Được xây dựng bằng React, Docusaurus tập trung vào việc tạo nội dung chất lượng một cách nhanh chóng và dễ dàng.

Docusaurus được thiết kế để giúp các nhà phát triển và những người muốn chia sẻ thông tin tạo ra các trang web tài liệu hoặc blog một cách hiện đại và thuận tiện. Các tính năng nổi bật của Docusaurus bao gồm hỗ trợ Markdown, tùy chỉnh giao diện, tích hợp Git, SEO tối ưu và khả năng viết bài viết blog.
</p>

<p align="justify">
Học Docusaurus cùng **Võ Nhất Phương**✨✨✨.
</p>

## 1. Bắt đầu

<p align="justify">
Bắt đầu bằng cách **tạo một trang web mới**.
</p>

### 1.1 Yêu cầu

<p align="justify">
- [Node.js](https://nodejs.org/en/download/) phiên bản 18.0 trở lên:
  - Khi cài đặt Node.js, bạn nên tích vào tất cả các ô liên quan đến dependencies.
</p>

### 1.2 Tạo một trang web mới

<p align="justify">
Tạo một trang web Docusaurus mới bằng **classic template**.

Classic template sẽ tự động được thêm vào dự án sau khi chạy lệnh:
</p>

```bash
npm init docusaurus@latest my-website classic
```

Chạy development server:

```bash
cd my-website
npm run start
```

<p align="justify">
Sau khi chạy thành công, mở đường dẫn http://localhost:3000 và đây là kết quả:
</p>

![Tổng quan Docusaurus](/img/tong-quan-docusaurus.webp)

<p align="justify">
Mở `docs/intro.md` (trang này) và chỉnh sửa một số dòng: trang web sẽ **tự động tải lại** và hiển thị các thay đổi.
</p>

## 2. Cấu trúc thư mục dự án

```
my-website/
├── blog/
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── build/
├── docs/
│   ├── tutorial-basics/
│   │   └── some .md files
│   ├── tutorial-extras/
│   │   └── some .md files
│   └── intro.md
├── src/
│   ├── components/
│   │   ├── HomepageFeatures.js
│   │   └── HomepageFeatures.module
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       ├── styles.module.css
│       ├── index.js
│       └── markdown-page.md
├── static/
│   └── img/
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

<p align="justify">
- **/blog** - Thư mục chứa các file markdown cho blog, chúng ta hoàn toàn có thể xóa nó đi khi không xây dựng một blog. 
</p>

<p align="justify">
- **/docs** - Nơi chứa toàn bộ Markdown files cho tài liệu.
</p>

<p align="justify">
- **/build** - Đây là nơi chứa source code sau khi build, chúng ta có thể deploy thẳng folder này lên github page hoặc netlify....etc 
</p>

<p align="justify">
- **/src** - Các loại file mà không phải dành cho mục đích tạo tài liệu, ví dụ như page hoặc một React component nào đó mà chúng ta viết.
</p>

<p align="justify">
- **/src/pages** - Các file trong thư mục này sẽ được chuyển thành 1 page.
</p>

<p align="justify">
- **/static** - Thư mục các tài nguyên tĩnh, ví dụ như hình ảnh.
</p>

<p align="justify">
- **/sidebar.js** - Được dùng để chỉ định thứ tự các trang tài liệu trên sidebar
</p>

## 3. Các thành phần trong 1 file Markdown
<p align="justify">
File tài liệu Markdown có một số thành phần thông tin quan trọng được đặt trên cùng của file gọi là Front Matter
</p>
<p align="justify">
Ví dụ: chúng được bắt đầu bằng --- và cũng kết thúc bằng ---
</p>
```
---
title: Hello
sidebar_label: "Xin chào"
sidebar_position: 1
slug: /my-custom-url
---

# Trang tài liệu đầu tiên

Đây là trang tài liệu đầu tiên của tôi
```

<p align="justify">
- **title**: Title của tab trên trình duyệt
- **sidebar_label**: tên hiển thị tài liệu trên sidebar
- **sidebar_position**: vị trí trang tài liệu bên sidebar
- **slug**: link url mong muốn
</p>

**Kết thúc bài blog đầu tiên Tìm hiểu về Docusaurus💯**