# Lit Template · Production-Ready Web Components Starter

Một template khởi tạo dự án hiện đại với **Lit**, **Vite** và **TypeScript**, được kiến trúc theo chuẩn **Production-ready**, tối ưu hóa toàn diện cho phát triển các Web Components tiêu chuẩn (Custom Elements) hiệu năng cao, nhẹ, không phụ thuộc framework cồng kềnh, phù hợp cho cả làm việc **Cá nhân (Solo)** lẫn **Đội ngũ (Team)**.

Thành viên mới chỉ cần:

```bash
git clone <repo-url>
cd lit_template
cp .env.example .env
npm install
npm run dev
```

Ứng dụng sẽ sẵn sàng phục vụ tại `http://localhost:5000`.

---

## 🚀 Tech Stack Thực Tế

| Thư viện / Công nghệ | Phiên bản thực tế | Vai trò trong hệ thống |
| :--- | :--- | :--- |
| **Lit** | `3.3.3` | Thư viện lõi phát triển Web Components hiện đại, hỗ trợ Reactive Properties, Shadow DOM và Template rendering siêu nhanh |
| **Vite** | `8.3.8` | Bundler và Development Server thế hệ mới tốc độ cực cao, hỗ trợ HMR (Hot Module Replacement) tức thì |
| **TypeScript** | `7.0.2` | Ngôn ngữ tĩnh kiểu nghiêm ngặt (`experimentalDecorators`, `moduleResolution: bundler`, `noEmit: true`) |
| **@rolldown/binding-win32-x64-msvc** | `1.2.19` | Native binary binding Rolldown tối ưu hóa hiệu năng build và bundle trên môi trường Windows x64 |

---

## 📋 Yêu Cầu Hệ Thống

- **Node.js:** Phiên bản LTS `^20.19.0` hoặc `>=22.12.0` (Khuyến nghị **Node.js 22 LTS** để tương thích tối đa với Vite 8).
- **NPM:** Phiên bản `10.x+` đi kèm Node.js LTS.

---

## ⚡ Hướng Dẫn Quick Start

1. **Clone repository về máy:**

   ```bash
   git clone <repo-url>
   cd lit_template
   ```

2. **Khởi tạo file cấu hình môi trường:**

   ```bash
   cp .env.example .env
   ```
   *(Trên Windows PowerShell: `Copy-Item .env.example .env`)*

3. **Cài đặt dependencies:**

   ```bash
   npm install
   ```
   *(Hệ thống đã cấu hình đầy đủ native binding `@rolldown/binding-win32-x64-msvc` cho Windows).*

4. **Khởi chạy Development Server:**

   ```bash
   npm run dev
   ```

5. **Truy cập ứng dụng:**
   Mở trình duyệt tại: [http://localhost:5000](http://localhost:5000)

---

## 🔐 Biến Môi Trường (.env)

Hệ thống điều khiển cấu hình cổng mạng thông qua file `.env`, được nạp tự động qua hàm `loadEnv` trong `vite.config.ts`.

| Tên biến | Giá trị mẫu | Bắt buộc | Phạm vi & Ý nghĩa |
| :--- | :---: | :---: | :--- |
| `PORT` | `5000` | Không | Cổng mạng cho Dev Server và Preview Server. Người dùng có thể đổi cổng tùy ý (ví dụ `PORT=3000`), Vite sẽ tự động nạp mà không cần sửa file config. |

> [!IMPORTANT]
>
> - Biến `PORT` được `vite.config.ts` đọc trực tiếp qua `loadEnv(mode, process.cwd(), '')` và gán tự động cho cả `server.port` và `preview.port`.
> - Nếu không khai báo hoặc file `.env` bị thiếu, server sẽ tự động fallback về cổng mặc định là `5000`.
> - File `.env` chứa cấu hình môi trường cụ thể của máy local. Luôn duy trì và cập nhật các biến mẫu vào `.env.example` khi bổ sung cấu hình mới.

---

## 🏗️ Cấu Trúc Thư Mục & Nguyên Tắc Phân Chia Code

Dự án áp dụng mô hình chuẩn của Web Components với **LitElement** và **Vite**:

```text
lit_template/
├── public/                       # Tài nguyên tĩnh phục vụ trực tiếp (không qua bundler)
│   ├── favicon.svg               # Favicon biểu tượng của ứng dụng
│   └── icons.svg                 # Bộ SVG sprite biểu tượng dùng chung
├── src/                          # Mã nguồn chính của ứng dụng
│   ├── assets/                   # Tài nguyên tĩnh được quản lý & import qua bundler
│   │   ├── hero.png              # Hình ảnh minh họa Hero
│   │   ├── lit.svg               # Logo định dạng vector của Lit
│   │   └── vite.svg              # Logo định dạng vector của Vite
│   ├── index.css                 # Style CSS toàn cục (reset CSS, typography, layout)
│   └── my-element.ts             # Web Component Lit mẫu (<my-element> kèm state, style, slot)
├── .env                          # Biến môi trường cục bộ (PORT=5000)
├── .env.example                  # File biến môi trường mẫu
├── .gitignore                    # Cấu hình danh sách file/thư mục Git bỏ qua
├── index.html                    # Điểm vào HTML chính nạp custom element
├── package.json                  # Cấu hình dự án, danh sách scripts và dependencies
├── package-lock.json             # Khóa phiên bản chi tiết của dependencies
├── tsconfig.json                 # Cấu hình trình biên dịch TypeScript compiler
└── vite.config.ts                # Cấu hình Vite (đọc biến PORT từ .env cho dev & preview)
```

### Nguyên tắc phân chia code:

1. **Nguyên tắc phát triển Web Component (`src/`):**
   - Mỗi component được định nghĩa bằng cách kế thừa `LitElement` và đăng ký qua decorator `@customElement('tag-name')`.
   - Khai báo state phản ứng (reactive state) bằng decorator `@property()` hoặc `@state()` để tự động re-render khi giá trị thay đổi.
   - Định nghĩa giao diện trong phương thức `render()` trả về template literal gắn tag `html`\`.
2. **Quản lý Shadow DOM & Scoped Styling:**
   - Định nghĩa style nội bộ của component thông qua thuộc tính tĩnh `static styles = css`\` để tận dụng Shadow DOM Scoped Styles, ngăn ngừa việc style bị tràn ra ngoài hoặc xung đột với các CSS khác trên trang.
   - Sử dụng CSS Custom Properties (CSS Variables) để cho phép tùy biến giao diện từ bên ngoài (e.g. `--accent`, `--bg`, `--text`).
3. **Phân biệt tài nguyên `public/` và `src/assets/`:**
   - **`src/assets/`:** Đặt các hình ảnh, icon được component `import` trực tiếp trong code TypeScript để Vite quản lý băm tên (hash), tối ưu hóa cache và bundle.
   - **`public/`:** Đặt các tài nguyên phục vụ trực tiếp qua URL gốc không cần biên dịch như `favicon.svg`, `robots.txt`, manifest hoặc sprite icon tĩnh.

---

## 🛠️ Danh Sách NPM Scripts

| Script | Lệnh thực thi | Mô tả |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Chạy development server tại port cấu hình trong `.env` (mặc định `5000`) với HMR. |
| `npm run build` | `tsc && vite build` | Kiểm tra kiểu dữ liệu tĩnh TypeScript và biên dịch bundle tối ưu cho production vào `dist/`. |
| `npm run preview` | `vite preview` | Chạy máy chủ xem trước bản build production tại port cấu hình trong `.env` (`http://localhost:5000`). |

---

## 📜 Quy Ước Git Commit (Conventional Commits)

Khuyến nghị toàn bộ thành viên tuân thủ quy ước commit message chuẩn:

```text
<loại>: <mô tả ngắn bằng chữ thường>

# Ví dụ:
feat: add theme toggle button component
fix: resolve port binding issue in vite config
refactor: optimize shadow dom styling in my-element
docs: update setup instructions in readme
chore: update dev dependencies
```

### Các loại commit hợp lệ (`type`):

- `feat`: Tính năng mới (new feature).
- `fix`: Sửa lỗi (bug fix).
- `docs`: Cập nhật tài liệu (documentation).
- `style`: Thay đổi định dạng code (khoảng trắng, dấu chấm phẩy) không ảnh hưởng logic.
- `refactor`: Tái cấu trúc mã nguồn mà không thêm tính năng hay sửa bug.
- `perf`: Cải thiện hiệu năng xử lý hoặc render.
- `test`: Bổ sung hoặc chỉnh sửa các bài kiểm thử (tests).
- `chore`: Cập nhật cấu hình build, tooling hoặc dependencies.

---

## 🤝 Đóng Góp & Phát Triển (Team Workflow)

1. Tạo nhánh mới từ `master`: `git checkout -b feat/ten-tinh-nang`.
2. Xây dựng hoặc mở rộng component trong `src/`.
3. Kiểm tra tính toàn vẹn kiểu và build trước khi commit:
   ```bash
   npm run build
   ```
4. Commit theo chuẩn Conventional Commits.
5. Tạo Pull Request (PR) mô tả rõ các thay đổi và kết quả kiểm thử.
