# 🚀 LỘ TRÌNH HỌC REACTJS THỰC CHIẾN (CHIA NHỎ MODULE)
**Dự án:** Hệ thống Quản lý Công ty (Company Management)
**Công nghệ chính:** ReactJS, JSON-Server (Mô phỏng REST API).

---

## 🟢 PHẦN 1: NỀN TẢNG CƠ BẢN (DỄ)

### 🚩 Module 1: Khởi động, UI tĩnh & Fetch API đơn lẻ
*Bắt đầu nhẹ nhàng bằng việc hiển thị giao diện tĩnh và lấy 1 danh sách dữ liệu đầu tiên.*

- **Mục tiêu:** 
  - Tổ chức kiến trúc dự án phân lớp cơ bản.
  - Dựng giao diện tĩnh (Table) bằng **Bootstrap** và **CSS thuần**.
  - Gọi API lấy danh sách phòng ban từ JSON-Server và hiển thị lên bảng.
- **Kiến thức cần học:**
  - Khởi tạo dự án (Vite).
  - Component & JSX.
  - Tích hợp thư viện Bootstrap.
  - `useState`, `useEffect` (Cơ bản).
  - Render List với `Array.map()`.

### 🚩 Module 2: Trạng thái UI & Kỹ thuật Map Dữ liệu
*Trải nghiệm người dùng tốt hơn và kết nối các dữ liệu lại với nhau.*

- **Mục tiêu:** 
  - Hiển thị chữ "Đang tải..." khi API chưa trả về và "Lỗi" nếu server chết.
  - Gọi thêm API Employees. Dùng ID của Quản lý ở bảng phòng ban để tìm Tên thật bên bảng Employees và hiển thị.
- **Kiến thức cần học:**
  - Conditional Rendering cơ bản (`if/else`, toán tử 3 ngôi).
  - Xử lý mảng trong JavaScript (`find`, `filter`).
  - Xử lý nhiều API tuần tự (hoặc `Promise.all`).

### 🚩 Module 3: Tương tác sự kiện & Render có điều kiện
*Thêm khả năng tương tác cơ bản: Bấm vào đâu là thông tin sổ ra đến đó.*

- **Mục tiêu:** 
  - Bấm nút **"View"** ở một phòng ban, hiện danh sách nhân viên dưới dạng **Accordion** (thả xuống).
  - Ẩn/hiện thông tin "Người phụ thuộc" dựa trên dữ liệu.
- **Kiến thức cần học:**
  - Event Handling (`onClick`).
  - Lifting State Up & Props.
  - Logical AND (`&&`) để ẩn/hiện element.

---

## 🟡 PHẦN 2: XỬ LÝ LOGIC & ĐIỀU HƯỚNG (TRUNG BÌNH)

### 🚩 Module 4: Tính toán & Quản lý Form (Thủ công)
*Làm quen với tính toán dữ liệu và cập nhật dữ liệu bằng thẻ HTML tiêu chuẩn.*

- **Mục tiêu:** 
  - Tính tổng lương dựa trên số giờ làm và lương cơ bản.
  - Tạo Form "Thêm giờ làm" bằng thẻ `<input>`, `<select>`.
  - Validate (bắt lỗi) thủ công bằng `if/else`.
  - POST dữ liệu lên JSON-Server bằng `axios`.
- **Kiến thức cần học:**
  - `useMemo` Hook để tối ưu tính toán.
  - Controlled Components (kết hợp `useState` và `onChange`).
  - Form Submission (`onSubmit`, `e.preventDefault()`).

### 🚩 Module 5: Custom Hooks & Axios Interceptors
*Bắt đầu dọn dẹp code, làm cho file Component mỏng hơn.*

- **Mục tiêu:** 
  - Tách logic gọi API (`fetch`, `loading`, `error`) thành một hàm dùng chung.
  - Tập trung mọi lỗi trả về từ API vào một chỗ để báo lỗi chung (VD: Hiện thông báo "Lỗi máy chủ").
- **Kiến thức cần học:**
  - Tư duy viết Custom Hooks (`useFetch`).
  - Khối `try...catch`.
  - **Axios Interceptors**.

### 🚩 Module 6: Kiến trúc Đa trang & Điều hướng
*Chuyển từ một trang đơn thành hệ thống nhiều màn hình.*

- **Mục tiêu:** 
  - Tách ứng dụng thành các trang riêng: `/dashboard`, `/departments`, `/employees`.
  - Tạo một Layout chính (có Sidebar và Header).
- **Kiến thức cần học:**
  - React Router DOM (`BrowserRouter`, `Routes`, `Route`).
  - Component Layout & `<Outlet>`.
  - URL Parameters (`useParams`).

---

## 🟠 PHẦN 3: CÔNG CỤ CHUYÊN NGHIỆP (KHÓ)

### 🚩 Module 7: Chuẩn hóa Form nhập liệu và Validate dữ liệu (Ứng dụng React Hook Form & Zod)
*Dự án thực tế không ai quản lý từng ô input bằng useState. Đã đến lúc dùng công cụ chuẩn doanh nghiệp.*

- **Mục tiêu:** 
  - Xóa bỏ form thủ công ở Module 4. Viết lại form thêm giờ bằng thư viện.
- **Kiến thức cần học:**
  - **React Hook Form**: Quản lý form nhẹ, chống re-render.
  - **Zod**: Viết Schema Validation tự động.

### 🚩 Module 8: Cấu hình hệ thống linh hoạt và Giải quyết Props Drilling (Ứng dụng Context API)
*Giải quyết bài toán truyền Props qua quá nhiều lớp Component (Props Drilling).*

- **Mục tiêu:** 
  - Lưu trữ Theme (Sáng/Tối) hoặc Ngôn ngữ (Vi/En) để dùng ở mọi nơi trong app.
- **Kiến thức cần học:**
  - `createContext`, `useContext`, Provider.

### 🚩 Module 9: Xây dựng tính năng Danh sách chọn tạm thời (Ứng dụng Zustand)
*Tìm kiếm một giải pháp thay thế linh hoạt và nhẹ nhàng hơn Context API.*

- **Mục tiêu:** 
  - Quản lý danh sách "Nhân viên đang chọn" (như tính năng Giỏ hàng) ở một kho lưu trữ bên ngoài.
- **Kiến thức cần học:**
  - **Zustand**: Khởi tạo Store, tạo Actions để cập nhật State.

### 🚩 Module 10: Quy chuẩn hóa luồng dữ liệu đa tầng quy mô lớn (Ứng dụng Redux Toolkit)
*Làm quen với công cụ State phổ biến nhất tại các công ty quy mô lớn.*

- **Mục tiêu:** 
  - Chuyển logic quản lý danh sách phòng ban phức tạp vào Redux.
- **Kiến thức cần học:**
  - **Redux Toolkit**: Slice, Dispatch, `useSelector`, Redux Thunk (tùy chọn).

---

## 🔴 PHẦN 4: NÂNG CAO & BẢO MẬT (RẤT KHÓ)

### 🚩 Module 11: Phân quyền truy cập và Bảo vệ giao diện nội bộ (Ứng dụng JWT & Private Routes)
*Khóa cửa dự án, chỉ người có quyền mới được vào xem nội dung.*

- **Mục tiêu:** 
  - Tạo luồng Login, lưu mã phiên làm việc và bảo vệ các đường dẫn trang.
- **Kiến thức cần học:**
  - Luồng hoạt động của **JWT** (JSON Web Token).
  - Lưu trữ `LocalStorage` an toàn.
  - Private/Protected Routes (Component chặn cổng).

### 🚩 Module 12: Xử lý Cache dữ liệu và Tự động đồng bộ trạng thái (Ứng dụng TanStack Query)
*Xóa bỏ những file Custom Hook gọi API tự chế. Dùng công cụ Caching chuyên nghiệp.*

- **Mục tiêu:** 
  - Xóa `useFetch` ở Module 5. Thay thế toàn bộ luồng gọi API bằng TanStack Query.
- **Kiến thức cần học:**
  - **React Query** (TanStack Query).
  - Quản lý Caching, Tự động Refetch, Mutation.

---

## 🟣 PHẦN 5: ĐẢM BẢO CHẤT LƯỢNG (TESTING & QA)
*Sau khi dự án đã thành hình, đây là lúc học cách bảo vệ code không bị "vỡ" khi có thay đổi mới.*

### 🚩 Module 13: Bảo vệ độ chính xác của các Thuật toán nghiệp vụ (Ứng dụng Vitest)
*Bắt đầu với việc kiểm thử các logic nhỏ nhất mà không màng tới giao diện.*

- **Mục tiêu:** 
  - Viết test cho hàm tính lương (dựa vào số giờ và mức lương). Đảm bảo kết quả toán học luôn đúng.
  - Viết test cho Custom Hook `useFetch` (hoặc logic lấy dữ liệu).
- **Kiến thức cần học:**
  - Setup **Vitest** (khuyên dùng cùng Vite) hoặc **Jest**.
  - Cú pháp cơ bản: `describe`, `it`, `expect`.
  - Kỹ thuật **Mocking** (làm giả) kết quả trả về của API để không phụ thuộc vào server thật.

### 🚩 Module 14: Ngăn chặn lỗi hiển thị và Tương tác UI vỡ khung (Ứng dụng React Testing Library)
*Đảm bảo giao diện phản hồi đúng khi người dùng tương tác.*

- **Mục tiêu:** 
  - Test nút "View" ở trang danh sách: Bấm vào thì Accordion phải xổ xuống.
  - Test form Thêm giờ làm: Nhập sai thông tin thì chữ báo lỗi màu đỏ phải hiện ra.
- **Kiến thức cần học:**
  - **React Testing Library** (RTL).
  - Khái niệm Render ảo, tìm kiếm thẻ HTML qua `screen.getByRole`, `screen.getByText`.
  - Giả lập hành vi người dùng bằng `userEvent` (click, gõ phím).

### 🚩 Module 15: Giả lập kịch bản thao tác tự động của Người dùng (Ứng dụng Playwright)
*Tự động hóa trình duyệt y như một người dùng thật đang thao tác.*

- **Mục tiêu:** 
  - Viết một kịch bản bot tự động mở trình duyệt, điền tài khoản, bấm Đăng nhập, chuyển sang trang Dashboard và kiểm tra xem có tên User trên thanh Header không.
- **Kiến thức cần học:**
  - **Playwright** (hoặc Cypress).
  - Viết script điều hướng trang, trích xuất dữ liệu UI và Assertions (xác thực) trên trình duyệt thực tế.

---

## 🔵 PHẦN 6: CHUẨN MỰC ENTERPRISE

### 🚩 Module 16 (Mở rộng): Xóa bỏ rủi ro vỡ cấu trúc dữ liệu lúc Runtime (Ứng dụng TypeScript)
*Mảnh ghép bắt buộc để dự án đạt chuẩn Enterprise.*

- **Mục tiêu:** 
  - Cập nhật toàn bộ codebase từ `.js` / `.jsx` sang `.ts` / `.tsx`.
  - Cảnh báo lỗi cấu trúc dữ liệu ngay trong quá trình viết code.
- **Kiến thức cần học:**
  - Types & Interfaces trong TypeScript.
  - Định nghĩa Type cho Props, State và API Response.

---

## 💡 Lời khuyên dành cho bạn:
- **Hãy đi từng bước nhỏ:** Lộ trình 16 Module nhìn thì dài, nhưng mỗi Module giải quyết một bài toán rất cụ thể. Không nhảy cóc!
- **Đừng sợ lỗi:** Liên tục mở **React DevTools** và Tab **Network** để hiểu rõ luồng dữ liệu. Lỗi đỏ chót trên console là cơ hội học hỏi lớn nhất.
- Khi làm đến Module 7 và 12, bạn sẽ tự mỉm cười nhận ra tại sao phải khổ sở tự code thủ công ở Module 4 và 5. Trải qua sự bất tiện giúp bạn trân trọng công cụ hiện đại!
