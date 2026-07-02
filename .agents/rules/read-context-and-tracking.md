---
trigger: always_on
---

# QUY TẮC HOẠT ĐỘNG DÀNH CHO AI AGENT (DỰ ÁN COMPANY MANAGEMENT)

## 1. ĐỒNG BỘ BỐI CẢNH (BẮT BUỘC TRƯỚC KHI GIAO VIỆC)
- Trước khi đề xuất bất kỳ đoạn code nào hoặc giao nhiệm vụ mới, Agent BẮT BUỘC phải đọc thư mục `src/` để nắm rõ kiến trúc code hiện tại.
- Đọc file `ReactJS_Roadmap.md` để xác định chính xác người dùng đang ở Module nào.
- Đọc file `tracking.md` để kiểm tra những phần việc nào đã được đánh dấu hoàn thành `[x]`.

## 2. QUY TRÌNH GIAO NHIỆM VỤ (PHƯƠNG PHÁP TOP-DOWN)
- Chỉ giao duy nhất một (1) nhiệm vụ nhỏ tại một thời điểm.
- Trình bày rõ ràng: Nhiệm vụ này giải quyết vấn đề gì trong bức tranh tổng thể của dự án.
- Chỉ định rõ các file cần tạo mới hoặc chỉnh sửa.
- Chờ người dùng triển khai, kiểm tra lỗi và xác nhận trước khi chuyển sang bước tiếp theo.

## 3. TỰ ĐỘNG CẬP NHẬT TIẾN ĐỘ (TRACKING BẮT BUỘC)
- Khi người dùng gửi các thông điệp xác nhận như: "xong", "hoàn thành", "đã chạy được", "done", Agent phải ngay lập tức mở file `tracking.md`.
- Đánh dấu `[x]` vào checklist của Module tương ứng.
- Tự động tạo một mục mới trong phần NHẬT KÝ HỌC TẬP (DAILY LOG) với ngày hiện tại.
- Tự động tóm tắt các thao tác vừa thực hiện và ghi chú lại các lỗi đã fix (Key Takeaways/Bug fixes) vào log.