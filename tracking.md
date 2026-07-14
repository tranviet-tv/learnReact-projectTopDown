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
- [x] **Module 3: Tương tác sự kiện & Hook useMemo**
  - [x] Bấm nút hiển thị thông tin chi tiết (nút View).
  - [x] Tối ưu hóa tính toán với useMemo.

### 🟡 PHẦN 2: XỬ LÝ LOGIC PHỨC TẠP & ĐIỀU HƯỚNG
- [x] **Module 4: Quản lý State Phức tạp với useReducer & HTML5 Validation**
  - [x] Xây dựng form nhập liệu (Thêm/Sửa/Login).
  - [x] Sử dụng useReducer quản lý state form.
  - [x] Xác thực dữ liệu với HTML5 Validation.
- [x] **Module 5: Quản lý Global State với Context API & useReducer**
  - [x] Quản lý trạng thái Đăng nhập.
  - [x] Quản lý dữ liệu dùng chung.
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

### 07/07/2026
- **Task hoàn thành:** Tối ưu hóa API (Promise.all + Axios) & Tích hợp React-Bootstrap Components (Hoàn thành Module 1 & 2).
- **Key Takeaways/Bug fixes:**
  - Phát hiện và xử lý lỗi "chớp" dữ liệu do Race Condition khi gọi nhiều API.
  - Ứng dụng `Promise.all` đồng bộ hoá thời gian chờ của nhiều API.
  - Phân biệt rõ thư viện `axios` và cú pháp `async/await` trong việc xử lý bất đồng bộ.
  - Nắm được cú pháp `import { Table, Button } from 'react-bootstrap'` để sử dụng UI Component chuẩn React thay cho thẻ HTML thuần, thiết kế chuyên nghiệp hơn.
  - Cập nhật state `selectedEmpId` và dùng Conditional Rendering để ẩn/hiện danh sách người phụ thuộc của nhân viên.

### 13/07/2026
- **Task hoàn thành:** Hiển thị thông tin chi tiết (Toggle View) và tối ưu giao diện Table/Fragment.
- **Key Takeaways/Bug fixes:**
  - Hiểu cách viết logic ẩn/hiện (Toggle State) bằng toán tử 3 ngôi trong hàm onClick.
  - Phân biệt được sự khác nhau giữa thẻ viết tắt `<></>` và `<React.Fragment>`. Biết cách dùng `<React.Fragment>` để truyền thuộc tính `key` khi render mảng.
  - Sử dụng thuộc tính `colSpan` để gộp cột trong HTML Table, giúp giao diện không bị vỡ.
- **Next up:** Tối ưu hóa tính toán (tính tổng số người phụ thuộc) với Hook `useMemo` (Module 3).

### 13/07/2026 (Hoàn thành Module 3)
- **Task hoàn thành:** Tối ưu hóa tính toán (tính tổng số người phụ thuộc) với Hook `useMemo`.
- **Key Takeaways/Bug fixes:**
  - Hiểu cách dùng hàm `reduce()` để gom mảng dữ liệu thành một giá trị duy nhất (tính tổng).
  - Giải quyết lỗi vi phạm **"Rules of Hooks"** (Rendered more hooks than during the previous render): Hiểu được nguyên tắc tuyệt đối không gọi Hook ở bên dưới câu lệnh `return` (Early Return) để tránh việc thứ tự gọi Hook bị thay đổi giữa các lần render.
- **Next up:** (Bắt đầu Phần 2 - Module 4) Xây dựng Form nhập liệu và quản lý state phức tạp với `useReducer`.

### 14/07/2026
- **Task hoàn thành:** Xây dựng Form nhập liệu, quản lý state bằng useReducer & Validate giao diện với HTML5 + Bootstrap (Hoàn thành Module 4).
- **Key Takeaways/Bug fixes:**
  - Hiểu cách setup npm script để chạy đồng thời cả 2 server (`npm run dev` và `npm run server`) bằng thư viện `concurrently`.
  - Nắm được lỗi `ReferenceError: Cannot access ... before initialization` do bản chất Hoisting của Arrow function, khác với từ khóa `function`.
  - Hiểu nguyên lý làm việc với Form trong React: Dùng `e.target` để lấy giá trị động, `e.preventDefault()` để chặn hành vi reload trang.
  - Vận dụng thành công `noValidate`, `validated` state và `checkValidity()` để tắt popup mặc định trình duyệt và thay thế bằng giao diện cảnh báo lỗi đỏ xịn sò của React-Bootstrap.
- **Next up:** Gửi dữ liệu Form (POST request) lên JSON-Server để lưu nhân viên mới vào Database.

### 14/07/2026 (Tiếp tục)
- **Task hoàn thành:** Áp dụng Context API để quản lý Global State và gọi API POST thêm mới dữ liệu.
- **Key Takeaways/Bug fixes:**
  - Hiểu sâu sắc sự khác biệt giữa truyền tham chiếu hàm (Callback) `() => {}` và gọi hàm trực tiếp `()` trong `.then()`.
  - Nhận thức được tầm quan trọng của Data Transfer Object (DTO) khi dữ liệu UI (Form) và dữ liệu API (Database) không cùng cấu trúc.
  - Giải quyết bài toán "Props Drilling" và "F5 thủ công" bằng cách chuyển State lên **Context API (Trụ sở chính)** và dùng `useContext` để lấy State + hàm `setEmployees` xuống các Component con.
  - Biết cách giải quyết bẫy "mất gói hàng" khi nối (chaining) nhiều `.then()` trong axios.
- **Next up:** Hoàn thiện nốt Form bằng cách lấy mảng `departments` từ Context để tạo một Select Box chọn phòng ban thật, thay vì hardcode `depId: 2`.

### 14/07/2026 (Hoàn thành Form)
- **Task hoàn thành:** Hoàn thiện Select Box chọn phòng ban và lấy dữ liệu động từ Context API.
- **Key Takeaways/Bug fixes:**
  - Biết cách sử dụng `.map()` để render danh sách `<option>` tự động dựa vào mảng `departments`.
  - Lấy thành công `departments` từ `EmployeeContext` để sử dụng.
  - *Lưu ý ôn tập:* Các thẻ Select của HTML mặc định trả về kiểu chuỗi (String). Khi cần ID dạng số để gửi cho API, phải ép kiểu thành số. Và luôn cần một option mặc định rỗng `<option value="">` kết hợp thuộc tính `required` để bắt validation chính xác.
- **Next up:** Bắt đầu phần quản lý trạng thái Đăng nhập với Context API (Tiếp tục Module 5).

### 14/07/2026 (Quản lý trạng thái Đăng nhập - AuthContext)
- **Task hoàn thành:** Thiết lập Context quản lý Đăng nhập (`AuthContext`) và cấu trúc lại Layout để Conditional Rendering.
- **Key Takeaways/Bug fixes:**
  - Hiểu sâu sắc quy tắc cốt lõi: Không thể gọi `useContext` ngay tại Component đang render ra thẻ `Provider` của Context đó. Phải tách Layout ra component con (`AppLayout.jsx`).
  - Phân biệt rõ Default Export (không dùng ngoặc nhọn khi import) và Named Export (bắt buộc dùng ngoặc nhọn).
  - Khắc phục lỗi trùng lặp tên biến (Identifier has already been declared) khi bóc tách dữ liệu từ Context trùng tên với state nội bộ của Component.
- **Next up:** Bắt đầu Module 6: Cài đặt thư viện React Router DOM để chia ứng dụng thành nhiều trang riêng biệt.
