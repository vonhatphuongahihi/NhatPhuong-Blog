---
sidebar_position: 4
---

# Tính Năng Markdown

Docusaurus hỗ trợ **[Markdown](https://daringfireball.net/projects/markdown/syntax)** và một số tính năng bổ sung.

## 1. Front matter

Các tài liệu Markdown có metadata ở đầu được gọi là [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: Tiêu đề tài liệu của tôi
description: Mô tả tài liệu của tôi
slug: /my-custom-url
---
// highlight-end

## Tiêu đề Markdown

Văn bản Markdown với [liên kết](./hello.md)
```

## 2. Liên kết

Hỗ trợ các liên kết Markdown thông thường, sử dụng đường dẫn url hoặc đường dẫn tệp tương đối.

```md
Hãy xem cách [Tạo một trang](/create-a-page).
```

```md
Hãy xem cách [Tạo một trang](./create-a-page.md).
```

**Kết quả:** Hãy xem cách [Tạo một trang](./create-a-page.md).

## 3. Hình ảnh

Hỗ trợ hình ảnh Markdown thông thường.

Có thể sử dụng đường dẫn tuyệt đối để tham chiếu hình ảnh trong thư mục tĩnh (`static/img/docusaurus.png`):

```md
![Logo Docusaurus](/img/docusaurus.png)
```

![Logo Docusaurus](/img/docusaurus.png)

Cũng có thể tham chiếu hình ảnh tương đối với tệp hiện tại. Điều này đặc biệt hữu ích để đặt hình ảnh gần với các tệp Markdown đang sử dụng chúng:

```md
![Logo Docusaurus](./img/docusaurus.png)
```

## 4. Khối mã code

Hỗ trợ khối mã Markdown với tô sáng cú pháp.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Xin chào, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Xin chào, Docusaurus!</h1>;
}
```

## 5. Cảnh báo

Docusaurus có cú pháp đặc biệt để tạo cảnh báo và ghi chú:

```md
:::tip Mẹo

Sử dụng tùy chọn tính năng Docusaurus

:::

:::danger Cẩn thận

Hành động này nguy hiểm

:::
```

:::tip Mẹo 

Sử dụng tùy chọn tính năng Docusaurus

:::

:::danger Cẩn thận

Hành động này nguy hiểm

:::

## 6. MDX và thành phần React

[MDX](https://mdxjs.com/) làm cho tài liệu tương tác hơn và cho phép sử dụng bất kỳ thành phần React nào bên trong Markdown:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`Bạn đã nhấp vào màu ${color} với nhãn ${children}`)
    }}>
    {children}
  </span>
);

Đây là <Highlight color="#25c2a0">màu xanh Docusaurus</Highlight> !

Đây là <Highlight color="#1877F2">màu xanh Facebook</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`Bạn đã nhấp vào màu ${color} với nhãn ${children}`);
    }}>
    {children}
  </span>
);

Đây là <Highlight color="#25c2a0">màu xanh Docusaurus</Highlight> !

Đây là <Highlight color="#1877F2">màu xanh Facebook</Highlight> !


<p align="center">
**Võ Nhất Phương** hoàn thành✨✨✨.
</p>