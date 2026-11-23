# Lit TypeScript Template ⚡️

Template dự án hiện đại, hiệu năng cao xây dựng trên nền tảng **Lit**, **Vite** và **TypeScript**. Template này cung cấp bộ khung chuẩn giúp phát triển các Web Components tiêu chuẩn (Custom Elements) nhẹ, tốc độ cao, độc lập và dễ dàng tích hợp vào bất kỳ nền tảng hoặc ứng dụng web nào mà không bị ràng buộc bởi các framework nặng nề.

---

## 🚀 Công nghệ & Phiên bản sử dụng

Dữ liệu phiên bản được ghi nhận chính xác theo thời gian thực từ `package.json` và môi trường cài đặt thực tế (`npm list`):

| Thư viện / Công cụ | Phiên bản thực tế | Phiên bản trong `package.json` | Loại phụ thuộc | Vai trò & Chức năng |
| :--- | :--- | :--- | :--- | :--- |
| **lit** | `3.3.3` | `^3.3.3` | `dependencies` | Thư viện lõi phát triển Web Components hiện đại với reactive properties và HTML templating siêu nhẹ. |
| **vite** | `8.3.8` | `^8.3.6` | `devDependencies` | Frontend tooling & dev server thế hệ mới tốc độ cao, hỗ trợ HMR (Hot Module Replacement) và build đóng gói. |
| **typescript** | `7.0.2` | `~7.0.2` | `devDependencies` | Trình biên dịch và kiểm tra kiểu dữ liệu tĩnh nghiêm ngặt cho TypeScript. |
| **@rolldown/binding-win32-x64-msvc** | `1.2.19` | `^1.2.19` | `devDependencies` | Thư viện native binary binding của Rolldown phục vụ build & bundle hiệu năng cao trên Windows x64. |

---

## 📁 Cấu trúc thư mục

Cây thư mục thực tế của dự án hiện tại:

```text
C:\Code\Template
├── lit_template/
│   ├── public/
│   │   ├── favicon.svg             # Favicon của ứng dụng
│   │   └── icons.svg               # Bộ SVG sprite biểu tượng (docs, github, discord...)
│   ├── src/
│   │   ├── assets/
│   │   │   ├── hero.png            # Hình ảnh minh họa Hero
│   │   │   ├── lit.svg             # Logo Lit
│   │   │   └── vite.svg            # Logo Vite
│   │   ├── index.css               # Định dạng CSS toàn cục
│   │   └── my-element.ts           # Lit Web Component mẫu (<my-element> kèm bộ đếm & showcase)
│   ├── .env                        # File cấu hình biến môi trường cục bộ (PORT=5000)
│   ├── .env.example                # File biến môi trường mẫu
│   ├── .gitignore                  # Cấu hình danh sách file bỏ qua khi commit Git
│   ├── index.html                  # File HTML chính nạp và hiển thị Web Component
│   ├── package.json                # Khai báo cấu hình dự án, dependencies và scripts
│   ├── package-lock.json           # Khóa phiên bản chi tiết của node_modules
│   ├── tsconfig.json               # Cấu hình trình biên dịch TypeScript
│   └── vite.config.ts              # Cấu hình Vite (đọc biến PORT từ .env cho dev & preview)
├── .env                            # Biến môi trường tại thư mục gốc (PORT=5000)
├── .env.example                    # Biến môi trường mẫu tại thư mục gốc
└── README.md                       # Tài liệu hướng dẫn sử dụng tiếng Việt
```

---

## ⚙️ Cấu hình môi trường (.env)

Dự án sử dụng file `.env` để kiểm soát các biến môi trường cấu hình server.

Nội dung file `.env` và `.env.example`:
```env
PORT=5000
```

- Trong `vite.config.ts`, hàm `loadEnv(mode, process.cwd(), '')` sẽ tải các biến môi trường trực tiếp từ file `.env`.
- Cả **Dev Server** (`server.port`) và **Preview Server** (`preview.port`) đều tự động đọc giá trị `PORT` từ `.env` (mặc định là `5000` nếu biến không tồn tại):
  ```ts
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.PORT) || 5000;
  ```

---

## 💻 Hướng dẫn cài đặt & Khởi chạy

Các lệnh thực tế được định nghĩa trong mục `"scripts"` của `package.json`:

### 1. Di chuyển vào thư mục dự án
Nếu đang ở thư mục gốc của repository, chuyển vào thư mục `lit_template`:
```bash
cd lit_template
```

### 2. Cài đặt Dependencies
```bash
npm install
```
*(Đã bao gồm đầy đủ native binding `@rolldown/binding-win32-x64-msvc` cho Windows x64).*

### 3. Khởi chạy máy chủ phát triển (Dev Server)
```bash
npm run dev
```
- Máy chủ phát triển sẽ tự động mở và lắng nghe tại: **`http://localhost:5000`**
- Hỗ trợ tính năng Hot Module Replacement (HMR) cập nhật tức thì khi chỉnh sửa mã nguồn.

### 4. Kiểm tra kiểu & Đóng gói sản phẩm (Build)
```bash
npm run build
```
- Lệnh này chạy kiểm tra kiểu với TypeScript (`tsc`) và đóng gói mã nguồn tối ưu hóa với Vite (`vite build`) vào thư mục `dist/`.

### 5. Xem trước bản đóng gói (Preview)
```bash
npm run preview
```
- Chạy máy chủ xem trước bản build production tại: **`http://localhost:5000`**
