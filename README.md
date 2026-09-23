# 론데이터 (RON DATA) 공식 홈페이지

Next.js 14 (App Router) + TypeScript + Tailwind CSS 기반 B2B 마케팅 회사 홈페이지입니다.

## 실행 방법

```bash
npm install
npm run dev
```

## 환경변수 (배포 전 반드시 설정)

`.env.example`을 복사해 `.env.local`을 만들고 실제 값을 입력하세요.

```env
NEXT_PUBLIC_TELEGRAM_URL=실제_텔레그램_URL
NEXT_PUBLIC_SITE_URL=실제_사이트_URL
```

- `NEXT_PUBLIC_SITE_URL`을 설정하지 않으면 `lib/config.ts`의 fallback 값인
  `https://SITE_URL_PLACEHOLDER`가 canonical / sitemap / Open Graph / robots에
  그대로 노출됩니다. **실제 배포 전 반드시 실제 도메인으로 교체하세요.**
- `NEXT_PUBLIC_TELEGRAM_URL`을 설정하지 않으면 fallback 값인
  `TELEGRAM_URL_PLACEHOLDER`가 모든 Telegram 버튼의 링크로 사용됩니다.
  **실제 배포 전 반드시 실제 Telegram 링크로 교체하세요.**

`http://localhost:3000` 에서 확인할 수 있습니다.

배포용 빌드:

```bash
npm run build
npm run start
```

## 반드시 직접 채워야 하는 값 (임의로 생성하지 않은 항목)

이 프로젝트는 실제 정보가 없는 항목을 placeholder로 남겨두었습니다.
서비스 오픈 전 아래 항목을 반드시 확인하고 채워주세요.

| 항목 | 위치 | 비고 |
| --- | --- | --- |
| 사이트 도메인 | `.env` → `NEXT_PUBLIC_SITE_URL` | canonical, sitemap, OG, robots에 자동 반영 |
| Telegram 상담 링크 | `.env` → `NEXT_PUBLIC_TELEGRAM_URL` | 모든 Telegram 버튼에 자동 반영 |
| 이메일 / 전화번호 / 주소 | `lib/config.ts` → `contact` | 현재 빈 문자열 |
| 사업자등록번호 | `lib/config.ts`, `app/company/page.tsx`, `components/Footer.tsx` | "확정 후 표기 예정"으로 표시 중 |
| 개인정보처리방침 본문 | `app/privacy/page.tsx` | 목차 구조만 마련되어 있으며, 실제 개인정보 처리 방식과 법률 검토 결과를 반영해 **직접 작성**해야 합니다. 이 저장소는 법률 자문을 대체하지 않습니다. |
| 문의 폼 접수 처리 | `components/ContactForm.tsx` | 현재 제출 시 실제 전송(이메일/DB 저장 등)이 연결되어 있지 않습니다. `handleSubmit` 함수를 실제 백엔드/API에 연결해 주세요. |

## 콘텐츠 관련 원칙

- 이 사이트의 어떤 페이지에도 실제 확인되지 않은 고객사, 거래 실적, 전환율,
  승인율, DB 수량, 매출 등의 수치는 작성되어 있지 않습니다.
- 개인정보의 적법성이나 법률 준수를 보장한다는 문구도 포함하지 않았습니다.
- 위 항목이 필요한 경우, 실제 데이터를 확보한 뒤 해당 페이지 컴포넌트에서
  직접 추가해 주세요.

## 폴더 구조

```
app/
  layout.tsx            루트 레이아웃, 전역 SEO 메타데이터, Organization/WebSite 스키마
  page.tsx               홈
  services/               서비스 개요
  google-demand-gen/      구글 디멘드젠 소개
  lead-generation/        리드 제너레이션 프로세스
  company/                회사소개
  faq/                    FAQ (FAQPage 스키마 포함)
  contact/                문의 (폼 UI + Telegram 링크)
  privacy/                개인정보처리방침 (목차만 존재, noindex)
  sitemap.ts              사이트맵 자동 생성
  robots.ts               robots.txt 자동 생성
components/               재사용 컴포넌트 (Header, Footer, TelegramButton, ProcessSteps 등)
lib/config.ts             회사명, 도메인, Telegram URL 등 전역 설정 (수정은 이 파일 한 곳)
```
