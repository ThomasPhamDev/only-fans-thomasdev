Bạn là Senior Frontend Engineer chuyên Next.js, React, TypeScript, Tailwind CSS.

Tôi đang xây dựng một project Portfolio cá nhân bằng Next.js. Đây là project dùng lâu dài, sau này sẽ update nhiều lần, nên code phải rõ ràng, dễ mở rộng, dễ bảo trì.

## Mục tiêu project

Xây dựng website portfolio cá nhân để giới thiệu:

- Thông tin cá nhân
- Kỹ năng lập trình
- Kinh nghiệm làm việc
- Dự án đã làm
- Blog hoặc bài viết kỹ thuật
- Thông tin liên hệ
- CV / Resume
- Link GitHub, LinkedIn, Email

## Tech stack

Sử dụng:

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- React Server Components nếu phù hợp
- Client Component chỉ dùng khi cần state, event, animation
- Không lạm dụng thư viện ngoài nếu không cần thiết

## Yêu cầu kiến trúc source code

Tổ chức source code rõ ràng, dễ mở rộng:

```txt
src/
  app/
    page.tsx
    layout.tsx
    about/
    projects/
    blog/
    contact/
  components/
    common/
    layout/
    sections/
    ui/
  constants/
  data/
  types/
  utils/
  hooks/
  styles/