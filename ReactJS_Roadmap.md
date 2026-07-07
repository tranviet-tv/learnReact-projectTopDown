# 🚀 LỘ TRÌNH HỌC REACTJS THỰC CHIẾN CHO DỰ ÁN CUỐI KỲ
**Dự án:** Hệ thống Quản lý Nhà hàng (Restaurant Management)
**Công nghệ chính:** ReactJS, React-Bootstrap, JSON-Server (Mô phỏng REST API), Jest & React Testing Library.

---

## 🟢 PHẦN 1: NỀN TẢNG CƠ BẢN

### 🚩 Module 1: Khởi động, UI tĩnh & Fetch API đơn lẻ
*Bắt đầu nhẹ nhàng bằng việc xây dựng cấu trúc dự án và hiển thị giao diện tĩnh.*

- **Mục tiêu:** 
  - Tổ chức kiến trúc dự án phân lớp cơ bản (components, pages, api, context, reducer).
  - Dựng giao diện tĩnh sử dụng các component của **React-Bootstrap** (`<Container>`, `<Row>`, `<Col>`, `<Card>`).
  - Gọi API lấy danh sách dữ liệu từ JSON-Server và hiển thị lên UI.
- **Kiến thức cần học:**
  - Khởi tạo dự án (Vite).
  - Component & JSX.
  - Cài đặt và sử dụng các component có sẵn của **React-Bootstrap**.
  - Hook cơ bản: `useState`, `useEffect`.
  - Render List với `Array.map()`.
  - Fetch dữ liệu cơ bản bằng thư viện `axios`.

### 🚩 Module 2: Trạng thái UI & Kỹ thuật Xử lý Mảng
*Cải thiện UX và xử lý dữ liệu từ API.*

- **Mục tiêu:** 
  - Quản lý trạng thái Loading và Error khi gọi API.
  - Sử dụng các hàm xử lý mảng để tìm kiếm hoặc tính toán dữ liệu hiển thị.
- **Kiến thức cần học:**
  - Conditional Rendering (`if/else`, toán tử 3 ngôi `? :`, Logical AND `&&`).
  - Các hàm xử lý mảng trong JavaScript (`find`, `filter`, `reduce`).
  - Xử lý nhiều API bằng Promise hoặc Async/Await.

### 🚩 Module 3: Tương tác sự kiện & Hook useMemo
*Thêm khả năng tương tác cơ bản và tối ưu hiệu suất tính toán.*

- **Mục tiêu:** 
  - Bấm nút để hiển thị thông tin chi tiết (Ví dụ: Ẩn/hiện một Modal hoặc một khối thông tin).
  - Tính toán dữ liệu phức tạp dựa trên dữ liệu lấy về mà không bị tính toán lại (re-render) không cần thiết.
- **Kiến thức cần học:**
  - Event Handling (`onClick`, `onChange`).
  - Lifting State Up & Props.
  - Tối ưu hóa tính toán với `useMemo` Hook.

---

## 🟡 PHẦN 2: XỬ LÝ LOGIC PHỨC TẠP & ĐIỀU HƯỚNG

### 🚩 Module 4: Quản lý State Phức tạp với useReducer & HTML5 Validation
*Chuyển từ useState sang useReducer khi form/logic trở nên lớn và nhiều field.*

- **Mục tiêu:** 
  - Xây dựng các form nhập liệu phức tạp (như trang Login, Thêm/Sửa thông tin).
  - Tách logic cập nhật state ra khỏi component thông qua hàm Reducer.
  - Xác thực dữ liệu (Validation) thủ công mà không dùng thư viện ngoài.
- **Kiến thức cần học:**
  - Tư duy và cách sử dụng Hook `useReducer` (State, Dispatch, Action, Reducer function).
  - Controlled Components (kết nối Form Control với State).
  - Validate form sử dụng **HTML5 Validation API** (`required`, `checkValidity()`, `noValidate`) kết hợp với hàm JavaScript custom.

### 🚩 Module 5: Quản lý Global State với Context API & useReducer
*Giải quyết bài toán truyền Props qua quá nhiều lớp Component (Props Drilling) và quản lý state chung cho toàn app.*

- **Mục tiêu:** 
  - Quản lý trạng thái Đăng nhập (`isAuthenticated`, `user`) dùng chung cho mọi trang.
  - Quản lý danh sách dữ liệu chính (như danh sách nhà hàng/thể loại) mà không cần gọi lại API nhiều lần.
- **Kiến thức cần học:**
  - Khởi tạo `createContext`, cung cấp dữ liệu qua `Provider` và lấy dữ liệu bằng `useContext`.
  - Kết hợp **Context API** với **useReducer** để tạo ra kho lưu trữ State tập trung (tương tự như Redux nhưng nhẹ hơn và thuần React).

### 🚩 Module 6: Kiến trúc Đa trang, Điều hướng & Bảo mật Route
*Chuyển ứng dụng thành hệ thống nhiều màn hình và chặn người dùng vãng lai.*

- **Mục tiêu:** 
  - Tách ứng dụng thành các trang riêng biệt.
  - Thiết lập một Layout chính chứa Header/Footer bao bọc các trang nội dung.
  - Viết Component bảo vệ, tự động đẩy người dùng về trang Đăng nhập nếu chưa xác thực.
- **Kiến thức cần học:**
  - Sử dụng React Router DOM (`BrowserRouter`, `Routes`, `Route`).
  - Kỹ thuật dùng Layout Component & thẻ `<Outlet>`.
  - Lấy tham số từ URL với `useParams`, điều hướng bằng mã với `useNavigate`.
  - Kỹ thuật viết **Protected Route** (Dựa vào state của Context API).

---

## 🟣 PHẦN 3: ĐẢM BẢO CHẤT LƯỢNG (TESTING & QA)
*Sau khi dự án đã thành hình, học cách kiểm thử code bằng test tự động (Automated Testing).*

### 🚩 Module 7: Kiểm thử Component và Giao diện người dùng (RTL & Jest)
*Đảm bảo giao diện phản hồi chính xác khi người dùng thao tác.*

- **Mục tiêu:** 
  - Viết test cho Component (Ví dụ: Khi nhập đúng username/password, form submit thành công).
  - Kiểm tra xem dữ liệu hiển thị có đúng cấu trúc hay không.
- **Kiến thức cần học:**
  - Setup môi trường Test cơ bản với **Jest**.
  - Sử dụng **React Testing Library** (RTL): Khái niệm Render ảo, tìm thẻ qua `screen.getByRole`, `screen.getByText`.
  - Kỹ thuật Mocking (làm giả hàm gọi API hoặc làm giả Context provider) để test riêng rẽ Component.

---

## 💡 Lời khuyên dành cho bạn:
- **Tập trung vào Pattern của Dự án mẫu:** Dự án thi sử dụng thiết kế **Context + useReducer**, đây là phần quan trọng nhất bạn cần hiểu sâu thay vì cố học các thư viện State Management phức tạp bên ngoài.
- **Nắm chắc React-Bootstrap:** Phần thi thiết kế giao diện sẽ dễ thở hơn rất nhiều nếu bạn thuộc cách dùng các Component cơ bản như `<Form.Control>`, `<Card>`, `<Modal>`, `<Row>`, `<Col>`.
- **Liên tục thực hành Form và Validation:** Việc thao tác với dữ liệu (Thêm/Sửa) và bắt lỗi nhập liệu là kỹ năng bắt buộc phải làm trôi chảy. Dùng kỹ thuật HTML5 Validation như trong dự án mẫu sẽ giúp bạn code nhanh hơn.
