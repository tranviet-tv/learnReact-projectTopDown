# 📈 THEO DÕI TIẾN ĐỘ DỰ ÁN (Company Management)

## 🎯 DANH SÁCH MODULE (CHECKLIST)

### 🟢 PHẦN 1: NỀN TẢNG CƠ BẢN
- [x] **Module 1: Khởi động, UI tĩnh & Fetch API đơn lẻ**
  - [x] Tổ chức kiến trúc dự án phân lớp cơ bản.
  - [x] Dựng giao diện tĩnh bằng React-Bootstrap.
  - [x] Gọi API lấy danh sách dữ liệu từ JSON-Server.
- [x] **Module 2: Trạng thái UI & Kỹ thuật Xử lý Mảng**
  - [x] Quản lý trạng thái Loading và Error.
  - [x] Xử lý mảng kết nối dữ liệu API (Employees & Departments).
- [ ] **Module 3: Tương tác sự kiện & Hook useMemo**
  - [ ] Bấm nút hiển thị thông tin chi tiết (nút View).
  - [ ] Tối ưu hóa tính toán với useMemo.

### 🟡 PHẦN 2: XỬ LÝ LOGIC PHỨC TẠP & ĐIỀU HƯỚNG
- [ ] **Module 4: Quản lý State Phức tạp với useReducer & HTML5 Validation**
  - [ ] Xây dựng form nhập liệu (Thêm/Sửa/Login).
  - [ ] Sử dụng useReducer quản lý state form.
  - [ ] Xác thực dữ liệu với HTML5 Validation.
- [ ] **Module 5: Quản lý Global State với Context API & useReducer**
  - [ ] Quản lý trạng thái Đăng nhập.
  - [ ] Quản lý dữ liệu dùng chung.
- [ ] **Module 6: Kiến trúc Đa trang, Điều hướng & Bảo mật Route**
  - [ ] Cài đặt React Router DOM, chia trang.
  - [ ] Thiết lập Layout Component.
  - [ ] Viết Protected Route bảo vệ trang.

### 🟣 PHẦN 3: ĐẢM BẢO CHẤT LƯỢNG (TESTING & QA)
- [ ] **Module 7: Kiểm thử Component và Giao diện người dùng (RTL & Jest)**
  - [ ] Setup môi trường Test cơ bản với Jest.
  - [ ] Viết test tương tác giao diện (React Testing Library).

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

### 01/07/2026 (Tiếp tục)
- **Task hoàn thành:** Hoàn thiện giao diện Table với Bootstrap và chuẩn hóa cấu trúc JSX.
- **Key Takeaways/Bug fixes:** 
  - Hiểu rõ sự khác biệt giữa `class` (HTML) và `className` (React JSX).
  - Nắm vững cấu trúc semantic HTML của một Table (`<table>`, `<thead>`, `<tbody>`, `<tr>`).
  - Biết cách áp dụng các class Bootstrap (`table`, `table-striped`, `table-bordered`, `table-dark`) để thiết kế giao diện bảng chuyên nghiệp.
- **Next up:** Cài đặt JSON-Server để tạo API giả, dùng useEffect gọi API lấy dữ liệu thật.

### 01/07/2026 (Cuối ngày)
- **Task hoàn thành:** Cài đặt JSON-Server và tạo Mock Database (`db.json`).
- **Key Takeaways/Bug fixes:** 
  - Hiểu được mục đích của JSON-Server trong việc tạo Fake REST API phục vụ cho quá trình phát triển Front-end khi chưa có Back-end thật.
  - Cấu trúc cơ bản của file `db.json` như một cơ sở dữ liệu.
- **Next up:** Khởi động JSON-Server, học về Hook `useEffect` và Fetch API (hoặc Axios) để lấy dữ liệu từ `db.json` hiển thị lên giao diện.

### 02/07/2026
- **Task hoàn thành:** Khởi động JSON-Server và dùng Fetch API kết nối dữ liệu thật lên giao diện.
- **Key Takeaways/Bug fixes:**
  - Nắm vững bản chất của `useState` (bộ nhớ, kích hoạt re-render) và `useEffect` (kẻ làm việc ngoài lề, gọi API 1 lần duy nhất sau render).
  - Khắc phục các lỗi cú pháp phổ biến của người mới: quên import hooks, viết sai mảng destructuring `[state, setState]`, đặt sai vị trí mảng phụ thuộc `[]` của `useEffect`.
  - Hiểu vòng đời cơ bản của component (Render rỗng -> Chạy Effect Fetch API -> Có data đẩy vào State -> Re-render có dữ liệu).
- **Next up:** (Module 2) - Bắt đầu xử lý trạng thái Loading (Đang tải...) và Error (Lỗi) để nâng cao UX, trước khi chuyển sang gọi API bảng Nhân viên.

### 03/07/2026
- **Task hoàn thành:** Xử lý trạng thái Loading và Error khi fetch API.
- **Key Takeaways/Bug fixes:**
  - Hiểu cách dùng `useState` để lưu trữ thêm cờ trạng thái `isLoading` và `error`.
  - Nắm được kỹ thuật dùng `.finally()` trong Promise để luôn tắt cờ `isLoading` bất chấp API thành công hay thất bại.
  - Áp dụng kỹ thuật **"Early Return"** để render giao diện có điều kiện (Conditional Rendering) một cách gọn gàng, tránh lồng `if/else` phức tạp.
- **Next up:** Gọi API Employees (Nhân viên) và hiển thị danh sách Nhân viên (Module 2).

### 03/07/2026 (Tiếp tục)
- **Task hoàn thành:** Hiển thị danh sách Nhân viên và map dữ liệu ID phòng ban.
- **Key Takeaways/Bug fixes:**
  - Nắm vững cách truy cập object lồng nhau (nested object) trong JSX.
  - Hiểu cách dùng `?.` (Optional Chaining) để bảo vệ ứng dụng khỏi crash.
  - Sử dụng mảng phụ (`departments`) làm "từ điển" để tìm và map `depId` thành tên phòng ban.
- **Next up:** Xử lý nút "View" để ẩn/hiện thông tin người phụ thuộc (Module 3).

### 03/07/2026 (Tạm dừng)
- **Task hoàn thành:** Làm đẹp bảng EmployeeList bằng Bootstrap và chuẩn bị UI cho nút "View" (Bắt đầu Module 3).
- **Key Takeaways/Bug fixes:**
  - Chủ động áp dụng các class CSS (`table-striped`, `table-dark`, `btn-primary`) để giao diện chuyên nghiệp hơn.
  - Hiểu được bài toán quản lý trạng thái trong danh sách: Cần một state lưu ID (`selectedEmpId`) thay vì cờ boolean thông thường để xác định chính xác dòng nào đang được tương tác.
- **Next up:** Tiếp tục Module 3: Gắn sự kiện `onClick` cho nút View, cập nhật state `selectedEmpId` và hiển thị danh sách người phụ thuộc thả xuống.
