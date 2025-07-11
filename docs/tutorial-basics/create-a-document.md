---
sidebar_position: 2
---

# Tạo Tài Liệu

## 1. Tạo trang tài liệu mới
Tạo một file Markdown, `greeting.md` và đặt nó trong thư mục `docs`.

```bash
website # thư mục gốc của trang web
├── docs
│   └── greeting.md
├── src
│   └── pages
├── docusaurus.config.js
├── ...
```

```md
---
description: Trang tài liệu đầu tiên của Võ Nhất Phương
---

# Xin chào 

Tôi 21 tuổi và là sinh viên năm 3 tại Trường Đại học Công nghệ Thông tin ĐHQG HCM.

```

:::note

Tất cả các file có tiền tố là dấu gạch dưới (`_`) trong thư mục `docs` sẽ được coi là các trang "một phần" và sẽ bị bỏ qua theo mặc định.
:::
## 2. Thẻ tài liệu

Thẻ được khai báo trong front matter và giới thiệu một chiều phân loại khác ngoài sidebar tài liệu.

Có thể định nghĩa thẻ trực tiếp, hoặc tham chiếu đến các thẻ được định nghĩa trước trong file thẻ.

Trong ví dụ sau:

- `docusaurus` tham chiếu đến một khóa thẻ được định nghĩa trước trong `docs/tags.yml`
- `Releases` là một thẻ trực tiếp, vì nó không tồn tại trong `docs/tags.yml`

```md title="docs/my-doc.md"
---
tags:
  - Releases
  - docusaurus
---

# Tiêu đề

Nội dung
```

```yml title="docs/tags.yml"
docusaurus:
  label: 'Docusaurus'
  permalink: '/docusaurus'
  description: 'Tài liệu liên quan đến framework Docusaurus'
```

:::tip

Thẻ cũng có thể được khai báo bằng `tags: [Demo, Getting started]`.
:::

## 3. Tổ chức cấu trúc thư mục 

Cách sắp xếp các file Markdown trong thư mục `docs` có thể ảnh hưởng đến nhiều khía cạnh của việc tạo nội dung Docusaurus. Tuy nhiên, hầu hết chúng có thể được tách biệt khỏi cấu trúc file.

### 3.1 ID tài liệu 

Mỗi tài liệu có một `id` duy nhất. Theo mặc định, `id` của tài liệu là tên của tài liệu (không có phần mở rộng) tương đối với thư mục gốc docs.

Ví dụ, ID của `greeting.md` là `greeting` và ID của `guide/hello.md` là `guide/hello`.

```bash
website # Thư mục gốc của trang web
└── docs
   ├── greeting.md
   └── guide
      └── hello.md
```

Tuy nhiên, **phần cuối cùng** của `id` có thể được người dùng định nghĩa trong front matter. Ví dụ, nếu nội dung của `guide/hello.md` được định nghĩa như bên dưới, `id` cuối cùng của nó là `guide/part1`.

```md
---
id: part1
---
Hello
```

ID được sử dụng để tham chiếu đến một tài liệu khi viết sidebar thủ công hoặc khi sử dụng các component hoặc hooks liên quan đến docs.

### 3.2 URL tài liệu {#doc-urls}

Theo mặc định, vị trí URL của tài liệu là đường dẫn file tương đối với thư mục `docs`. Tuy nhiên, có một vài trường hợp ngoại lệ, trong đó tên file sẽ không được đưa vào URL:

- Đặt tên là `index` (không phân biệt chữ hoa/thường): `docs/Guides/index.md`
- Đặt tên là `README` (không phân biệt chữ hoa/thường): `docs/Guides/README.mdx`
- Cùng tên với thư mục cha: `docs/Guides/Guides.md`

Trong tất cả các trường hợp, slug mặc định sẽ chỉ là `/Guides`, không có phần `/index`, `/README`, hoặc phần `/Guides` trùng lặp.


**Sử dụng front matter `slug` để thay đổi URL của tài liệu:**

Ví dụ, giả sử cấu trúc trang web của bạn như sau:

```bash
website # Thư mục gốc của trang web
└── docs
    └── guide
        └── hello.md
```

Theo mặc định `hello.md` sẽ có sẵn tại `/docs/guide/hello`. Bạn có thể thay đổi vị trí URL của nó thành `/docs/bonjour`:

```md
---
slug: /bonjour
---
Hello
```

`slug` sẽ được thêm vào `routeBasePath` của plugin docs, mặc định là `/docs`. 

:::note

Có thể sử dụng:

- slug tuyệt đối: `slug: /mySlug`, `slug: /`...
- slug tương đối: `slug: mySlug`, `slug: ./../mySlug`...

:::

Nếu muốn một tài liệu có sẵn ở thư mục gốc và có đường dẫn như `https://docusaurus.io/docs/`, có thể sử dụng front matter slug:

```md
---
id: my-home-doc
slug: /
---
Hello
```

### 3.3 Sidebars {#sidebars}

Khi sử dụng sidebar tự động tạo, cấu trúc file sẽ quyết định cấu trúc sidebar.


<p align="center">
**Võ Nhất Phương** hoàn thành✨✨✨.
</p>