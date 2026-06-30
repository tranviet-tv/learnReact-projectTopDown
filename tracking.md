# 📈 THEO DÕI TIẾN ĐỘ DỰ ÁN (Company Management)

## 🎯 DANH SÁCH MODULE (CHECKLIST)

### 🟢 PHẦN 1: NỀN TẢNG CƠ BẢN (DỄ)
- [ ] **Module 1: Khởi động, UI tĩnh & Fetch API đơn lẻ**
  - [x] Tổ chức kiến trúc dự án phân lớp cơ bản.
  - [ ] Dựng giao diện tĩnh (Table) bằng Bootstrap và CSS thuần.
  - [ ] Gọi API lấy danh sách phòng ban từ JSON-Server.
- [ ] **Module 2: Trạng thái UI & Kỹ thuật Map Dữ liệu**
  - [ ] Hiển thị chữ "Đang tải..." và "Lỗi".
  - [ ] Gọi API Employees và kết nối dữ liệu ID.
- [ ] **Module 3: Tương tác sự kiện & Render có điều kiện**
  - [ ] Xử lý nút "View" hiện danh sách thả xuống.
  - [ ] Ẩn/hiện thông tin phụ thuộc theo dữ liệu.

### 🟡 PHẦN 2: XỬ LÝ LOGIC & ĐIỀU HƯỚNG (TRUNG BÌNH)
- [ ] **Module 4: Tính toán & Quản lý Form (Thủ công)**
- [ ] **Module 5: Custom Hooks & Axios Interceptors**
- [ ] **Module 6: Kiến trúc Đa trang & Điều hướng**

### 🟠 PHẦN 3: CÔNG CỤ CHUYÊN NGHIỆP (KHÓ)
- [ ] **Module 7: Chuẩn hóa Form nhập liệu (React Hook Form & Zod)**
- [ ] **Module 8: Cấu hình hệ thống linh hoạt (Context API)**
- [ ] **Module 9: Danh sách chọn tạm thời (Zustand)**
- [ ] **Module 10: Quy chuẩn hóa luồng dữ liệu (Redux Toolkit)**

### 🔴 PHẦN 4: NÂNG CAO & BẢO MẬT (RẤT KHÓ)
- [ ] **Module 11: Phân quyền truy cập (JWT & Private Routes)**
- [ ] **Module 12: Xử lý Cache dữ liệu (TanStack Query)**

### 🟣 PHẦN 5: ĐẢM BẢO CHẤT LƯỢNG (TESTING & QA)
- [ ] **Module 13: Test thuật toán (Vitest)**
- [ ] **Module 14: Test UI/UX (React Testing Library)**
- [ ] **Module 15: Automation Test (Playwright)**

### 🔵 PHẦN 6: CHUẨN MỰC ENTERPRISE
- [ ] **Module 16: TypeScript**

---

## 📅 NHẬT KÝ HỌC TẬP (DAILY LOG)

### 30/06/2026
- **Task hoàn thành:** Tổ chức kiến trúc dự án phân lớp cơ bản
- **Key Takeaways/Bug fixes:**
  - Khởi tạo và làm sạch dự án Vite React.
  - Xử lý lỗi cài đặt NPM (lỗi 404 do sai tên package) và cài đặt thành công Bootstrap.
  - Biết cách import CSS từ `node_modules` vào dự án (file `main.jsx`).
  - Phân tích và tổ chức cấu trúc thư mục tiêu chuẩn với `components/` và `services/`.
- **Next up:** Dựng Component `DepartmentList` giao diện tĩnh với Table Bootstrap (Tiếp tục Module 1).

### 01/07/2026
- **Task hoàn thành:** Render danh sách phòng ban (DepartmentList) với dữ liệu tĩnh (mock data).
- **Key Takeaways/Bug fixes:** 
  - Fix lỗi cú pháp Octal literal trong JS (không dùng số `0` ở đầu số đếm thông thường).
  - Hiểu cách dùng `Array.map()` kết hợp với JSX để hiển thị danh sách (List).
  - Nắm được tầm quan trọng của thuộc tính `key` (giống như CCCD) giúp React định danh phần tử, tối ưu Virtual DOM và tránh bug hiển thị sai dữ liệu.
- **Next up:** Tích hợp Bootstrap để làm đẹp giao diện bảng (Table Layout).
