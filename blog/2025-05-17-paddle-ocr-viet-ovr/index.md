---
slug: paddle-ocr-and-viet-ocr
title: Tìm Hiểu Xây Dựng Hệ Thống OCR Cho Tiếng Việt Với PaddleOCR Và VietOCR
image: img/deploy_backend_java.png
authors: [vonhatphuong]
tags: [ai, ocr, vietnamese, paddleocr, vietocr]
---

## 1. Đặt vấn đề

### OCR là gì?
<p align="justify">
OCR (Optical Character Recognition) là công nghệ cho phép chuyển đổi văn bản từ hình ảnh thành dạng text có thể chỉnh sửa được. Đây là một trong những ứng dụng quan trọng của Computer Vision, giúp tự động hóa quá trình nhập liệu và xử lý tài liệu.

<!-- ![OCR là gì](img/what_is_ocr.png) -->
</p>

### Vì sao OCR cho tiếng Việt là một bài toán khó?
<p align="justify">
Tiếng Việt có những đặc điểm riêng biệt khiến việc nhận dạng trở nên phức tạp:

1. **Dấu thanh và dấu phụ**: Tiếng Việt có 6 thanh (ngang, sắc, huyền, hỏi, ngã, nặng) và các dấu phụ (ă, â, ê, ô, ơ, ư) làm tăng số lượng ký tự cần nhận dạng.

2. **Font chữ đa dạng**: Có nhiều font chữ tiếng Việt khác nhau, mỗi font có cách thể hiện dấu thanh và dấu phụ riêng.

3. **Khoảng cách và căn chỉnh**: Dấu thanh và dấu phụ có thể được đặt ở các vị trí khác nhau tùy font chữ.

4. **Chất lượng ảnh**: Ảnh chụp tài liệu thường có nhiễu, độ tương phản thấp, hoặc bị mờ.
</p>

### Tại sao cần xây dựng hệ thống OCR riêng cho tiếng Việt?
<p align="justify">
Mặc dù có nhiều công cụ OCR đa ngôn ngữ, việc xây dựng hệ thống riêng cho tiếng Việt mang lại nhiều lợi ích:

1. **Độ chính xác cao hơn**: Được tối ưu hóa đặc biệt cho đặc điểm tiếng Việt
2. **Xử lý tốt hơn với dấu thanh**: Giảm thiểu lỗi nhận dạng dấu thanh và dấu phụ
3. **Tốc độ xử lý nhanh hơn**: Không cần xử lý các ngôn ngữ không cần thiết
4. **Dễ dàng tùy chỉnh**: Có thể điều chỉnh theo nhu cầu cụ thể của ứng dụng
</p>

## 2. Tìm hiểu các framework OCR phổ biến

### PaddleOCR
<p align="justify">
PaddleOCR là một framework OCR mã nguồn mở được phát triển bởi Baidu, có những ưu điểm:

- Hỗ trợ nhiều ngôn ngữ, bao gồm tiếng Việt
- Có sẵn các model được huấn luyện sẵn
- Dễ dàng tùy chỉnh và fine-tune
- Hiệu suất tốt trong việc phát hiện văn bản (Text Detection)

<!-- ![PaddleOCR Architecture](img/paddleocr_architecture.png) -->
</p>

### VietOCR
<p align="justify">
VietOCR là một framework chuyên biệt cho tiếng Việt:

- Sử dụng kiến trúc Transformer hiện đại
- Được huấn luyện đặc biệt cho tiếng Việt
- Xử lý tốt dấu thanh và dấu phụ
- Hiệu suất cao trong nhận dạng văn bản (Text Recognition)

<!-- ![VietOCR Architecture](img/vietocr_architecture.png) -->
</p>

### So sánh các framework OCR
<p align="justify">
| Framework | Ưu điểm                                     | Nhược điểm                  | Phù hợp cho      |
| --------- | ------------------------------------------- | --------------------------- | ---------------- |
| Tesseract | • Mã nguồn mở  • Nhiều ngôn ngữ             | • Độ chính xác thấp  • Chậm | Dự án đơn giản   |
| EasyOCR   | • Dễ sử dụng  • Nhiều ngôn ngữ              | • Nặng  • Chậm              | Prototype        |
| PaddleOCR | • Hiệu suất cao  • Dễ tùy chỉnh             | • Cần GPU                   | Text Detection   |
| VietOCR   | • Tối ưu cho tiếng Việt  • Độ chính xác cao | • Chỉ hỗ trợ tiếng Việt     | Text Recognition |
</p>

## 3. Thiết kế pipeline OCR tiếng Việt

### Tổng quan pipeline
<p align="justify">
Pipeline OCR tiếng Việt của chúng ta gồm 3 bước chính:

1. **Text Detection**: Sử dụng PaddleOCR để phát hiện vùng văn bản
2. **Image Processing**: Xử lý và chuẩn bị ảnh cho bước nhận dạng
3. **Text Recognition**: Sử dụng VietOCR để nhận dạng nội dung văn bản

<!-- ![OCR Pipeline](img/ocr_pipeline.png) -->
</p>

### Bước 1: Text Detection với PaddleOCR
<p align="justify">
```python
from paddleocr import PaddleOCR

# Khởi tạo PaddleOCR
ocr = PaddleOCR(use_angle_cls=True, lang='en')

# Phát hiện văn bản
result = ocr.ocr(img_path, cls=True)

# Lấy tọa độ các vùng văn bản
boxes = [line[0] for line in result[0]]
```
</p>

### Bước 2: Xử lý ảnh
<p align="justify">
```python
import cv2
import numpy as np

def process_image(img, box, padding=10):
    # Cắt vùng văn bản
    x1, y1, x2, y2 = box
    text_region = img[y1:y2, x1:x2]
    
    # Thêm padding
    padded = cv2.copyMakeBorder(
        text_region,
        padding, padding, padding, padding,
        cv2.BORDER_CONSTANT,
        value=[255, 255, 255]
    )
    
    return padded
```
</p>

### Bước 3: Text Recognition với VietOCR
<p align="justify">
```python
from vietocr.tool.predictor import Predictor
from vietocr.tool.config import Cfg

# Cấu hình VietOCR
config = Cfg.load_config_from_name('vgg_transformer')
config['device'] = 'cuda:0'
detector = Predictor(config)

# Nhận dạng văn bản
text = detector.predict(processed_image)
```
</p>

## 4. Kết quả và đánh giá
<p align="justify">
Sau khi triển khai pipeline, chúng ta đạt được kết quả:

- Độ chính xác nhận dạng: ~95% với văn bản rõ ràng
- Thời gian xử lý: ~0.5s/ảnh (với GPU)
- Xử lý tốt với nhiều font chữ tiếng Việt khác nhau

<!-- ![Kết quả OCR](img/ocr_results.png) -->
</p>

## 5. Kết luận
<p align="justify">
Việc kết hợp PaddleOCR và VietOCR cho phép chúng ta xây dựng một hệ thống OCR tiếng Việt hiệu quả. Pipeline này có thể được tích hợp vào các ứng dụng thực tế như:

- Số hóa tài liệu
- Trích xuất thông tin từ hóa đơn, biên lai
- Nhận dạng văn bản từ ảnh chụp
- Tự động hóa quy trình xử lý tài liệu

Trong tương lai, chúng ta có thể cải thiện hệ thống bằng cách:
- Fine-tune model cho các trường hợp đặc biệt
- Tối ưu hóa tốc độ xử lý
- Thêm các tính năng như xử lý bảng, biểu đồ
</p>

<p align="center">
**Võ Nhất Phương** hoàn thành✨✨✨
</p>

