# 🏢 Company Management System

<div align="center">

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON--Server-Mock_API-green?style=for-the-badge&logo=json&logoColor=white)

**Dự án thực chiến học ReactJS theo phương pháp Top-Down**
*Xây dựng hệ thống quản lý công ty với đầy đủ CRUD operations*

</div>

---

## 📖 Giới thiệu

Đây là dự án học ReactJS theo lộ trình **Top-Down** — bắt đầu từ bài toán thực tế, sau đó tìm hiểu lý thuyết để giải quyết. Dự án mô phỏng một **Hệ thống Quản lý Công ty** bao gồm quản lý nhân viên và phòng ban, được xây dựng với công nghệ hiện đại nhất của hệ sinh thái React.

> 💡 **Phương pháp học:** Mỗi tính năng là một nhiệm vụ thực tế. Học lý thuyết khi cần, không học chay lý thuyết rồi mới làm.

---

## ✨ Tính năng đã hoàn thiện

| Tính năng | Mô tả | Công nghệ |
|-----------|-------|-----------|
| 📋 **Danh sách Phòng ban** | Hiển thị danh sách phòng ban từ API | `useState`, `useEffect`, `axios` |
| 👥 **Danh sách Nhân viên** | Bảng dữ liệu nhân viên kèm thông tin phòng ban | `Array.map()`, `Array.find()` |
| 🔍 **Xem chi tiết** | Ẩn/hiện thông tin người phụ thuộc | Toggle State, Conditional Rendering |
| 📊 **Tổng số phụ thuộc** | Tính toán tối ưu, không re-render thừa | `useMemo`, `Array.reduce()` |
| ➕ **Thêm Nhân viên** | Form nhập liệu với validation đầy đủ | `useReducer`, HTML5 Validation API |
| 🌐 **Global State** | Chia sẻ dữ liệu không cần Props Drilling | Context API, `useContext` |
| 🚀 **Đồng bộ API** | Gọi nhiều API song song, không Race Condition | `Promise.all`, `async/await` |

---

## 🛠️ Tech Stack

```
React 19        → Xây dựng UI Component
Vite 8          → Build tool & Dev Server siêu nhanh
React-Bootstrap → UI Component Library chuyên nghiệp
Bootstrap 5     → CSS Framework responsive
Axios           → HTTP Client gọi REST API
JSON Server     → Mock REST API (thay thế Backend)
Concurrently    → Chạy đồng thời nhiều npm script
```

---

## 🏗️ Kiến trúc dự án

```
company-management/
├── 📁 src/
│   ├── 📁 components/          # UI Components
│   │   ├── DepartmentList.jsx  # Bảng danh sách Phòng ban
│   │   ├── EmployeeList.jsx    # Bảng danh sách Nhân viên
│   │   └── EmployeeForm.jsx    # Form Thêm Nhân viên
│   │
│   ├── 📁 context/             # Global State Management
│   │   └── EmployeeContext.jsx # Context API + Provider
│   │
│   ├── 📁 services/            # API Layer (tầng gọi API)
│   │
│   ├── App.jsx                 # Root Component
│   └── main.jsx                # Entry Point
│
├── database.json               # Mock Database (JSON Server)
├── package.json
└── vite.config.js
```

---

## 🚀 Cài đặt & Chạy dự án

### Yêu cầu hệ thống
- **Node.js** >= 18.x
- **npm** >= 9.x

### Các bước cài đặt

**1. Clone repository**
```bash
git clone https://github.com/<your-username>/learnReact-projectTopDown.git
cd learnReact-projectTopDown/company-management
```

**2. Cài đặt dependencies**
```bash
npm install
```

**3. Khởi chạy ứng dụng**
```bash
# Chạy đồng thời React App (port 5173) và JSON Server (port 8000)
npm start
```

**Hoặc chạy riêng lẻ từng server:**
```bash
# Terminal 1: Chạy Mock API Server
npm run server   # → http://localhost:8000

# Terminal 2: Chạy React Dev Server
npm run dev      # → http://localhost:5173
```

### API Endpoints (JSON Server)

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/employees` | Lấy danh sách nhân viên |
| `POST` | `/employees` | Thêm nhân viên mới |
| `GET` | `/departments` | Lấy danh sách phòng ban |

---

## 📚 Lộ trình học tập (ReactJS Roadmap)

Dự án được xây dựng song song với lộ trình học 7 Module:

```
PHẦN 1 — NỀN TẢNG CƠ BẢN
├── ✅ Module 1: Khởi động, UI tĩnh & Fetch API
├── ✅ Module 2: Trạng thái UI & Kỹ thuật Xử lý Mảng
└── ✅ Module 3: Tương tác sự kiện & Hook useMemo

PHẦN 2 — LOGIC PHỨC TẠP & ĐIỀU HƯỚNG
├── ✅ Module 4: useReducer & HTML5 Validation
├── 🔄 Module 5: Context API & Global State       ← Đang ở đây
├── ⬜ Module 6: React Router & Protected Route
└── ⬜ Module 7: Testing với Jest & RTL

PHẦN 3 — ĐẢM BẢO CHẤT LƯỢNG
└── ⬜ Module 7: Kiểm thử Component (Jest & RTL)
```

---

## 🧠 Những kiến thức đã học được

<details>
<summary><strong>📌 React Hooks</strong></summary>

- `useState` — Quản lý state cục bộ, kích hoạt re-render
- `useEffect` — Side effects: gọi API sau khi render xong
- `useReducer` — Thay thế `useState` khi logic state phức tạp
- `useMemo` — Tối ưu tính toán, không tính lại khi không cần
- `useContext` — Lấy dữ liệu từ Context, giải quyết Props Drilling

</details>

<details>
<summary><strong>📌 JavaScript nâng cao</strong></summary>

- `Promise.all` — Gọi song song nhiều API, đồng bộ kết quả
- `async/await` — Viết bất đồng bộ như đồng bộ, dễ đọc hơn
- `Array.map()` — Render danh sách JSX
- `Array.find()` — Map ID → Tên (ví dụ: depId → tên phòng ban)
- `Array.reduce()` — Gom mảng thành 1 giá trị (tính tổng)
- Optional Chaining `?.` — Tránh crash khi dữ liệu chưa load

</details>

<details>
<summary><strong>📌 React Patterns</strong></summary>

- **Context API Pattern** — Global state không cần Redux
- **Controlled Components** — Kết nối Form với State
- **Early Return Pattern** — Conditional rendering gọn gàng
- **Toggle State Pattern** — Ẩn/hiện nội dung khi click
- **Data Transfer Object (DTO)** — Chuyển đổi dữ liệu UI ↔ API

</details>

<details>
<summary><strong>📌 Bugs đã vượt qua 🐛</strong></summary>

- ❌ `Rules of Hooks` violation — Hook không được gọi sau `return`
- ❌ Race Condition — 2 API trả về khác thời điểm, giao diện "chớp"
- ❌ `ReferenceError: Cannot access before initialization` — Hoisting của Arrow function
- ❌ Prop Drilling — Truyền props qua quá nhiều tầng component
- ❌ "Mất gói hàng" khi chain nhiều `.then()` trong axios
- ❌ Octal literal syntax error — Không dùng số `0` ở đầu

</details>

---

## 📅 Nhật ký tiến độ

> Xem chi tiết tại file [tracking.md](../tracking.md)

| Ngày | Milestone |
|------|-----------|
| 30/06/2026 | 🚀 Khởi tạo dự án, cấu trúc thư mục chuẩn |
| 01/07/2026 | 🎨 UI tĩnh DepartmentList với Bootstrap Table |
| 01/07/2026 | 🔌 Cài đặt JSON-Server, tạo Mock Database |
| 02/07/2026 | 📡 Kết nối Fetch API, hiển thị dữ liệu thật |
| 03/07/2026 | ⚡ Loading/Error states & EmployeeList |
| 07/07/2026 | 🚀 Promise.all + Axios + React-Bootstrap |
| 13/07/2026 | 🔍 Toggle View & useMemo optimization |
| 14/07/2026 | 📝 useReducer Form + Context API Global State |

---

## 👨‍💻 Tác giả

**Tran Viet** — Đang trên hành trình trở thành ReactJS Developer 🚀

---

<div align="center">

*"Biến tôi thành một kỹ sư có khả năng tự tư duy và giải quyết vấn đề, KHÔNG PHẢI là thợ copy-paste code."* 💪

**Made with ❤️ and a lot of ☕**

</div>
