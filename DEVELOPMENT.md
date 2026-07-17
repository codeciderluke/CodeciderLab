# Codecider Lab Website — 개발 문서

> 개발 기간: 2026-07-14 · React 19 + Vite 8 · 라이브: https://codeciderluke.github.io/CodeciderLab/

## 1. 프로젝트 개요

Codecider Lab의 공식 웹사이트. 조직에서 개발한 소프트웨어를 분야별 카테고리로 배포하고,
각 소프트웨어마다 전용 게시판을 운영해 자유롭게 의견을 나누는 것이 목적이다.

**브랜드 컨셉** (`CodeCider.png` 기반)

- **Code + Cider** — 코드와 발효음료의 합성어. 아이디어를 발효시켜 가치 있는 결과로.
- **Co-Decider** — AI와 사용자가 함께 결정하는 지능형 파트너.
- 비주얼: 네이비(`#1a2b4a`) + 사이다 그린(`#3faf4e`), 병 안에 Python·C++·JS·React
  배지가 탄산처럼 떠다니는 병 모티프 로고.

## 2. 기술 스택

| 영역 | 선택 | 비고 |
|---|---|---|
| 프레임워크 | React 19 + Vite 8 | JavaScript (TypeScript 미사용) |
| 라우팅 | react-router-dom | BrowserRouter + `basename=import.meta.env.BASE_URL` |
| 다국어 | 자체 Context (`src/i18n/`) | 영문 기본, KO 토글, localStorage 저장 |
| 게시판 | localStorage | 클라이언트 전용 (서버 백엔드 없음) |
| 스타일 | 단일 CSS (`src/index.css`) | CSS 변수 기반 디자인 시스템 |
| 배포 | GitHub Actions → GitHub Pages | main 푸시 시 자동 배포 |

## 3. 프로젝트 구조

```
codeciderweb/
├── .github/workflows/deploy.yml   # Pages 자동 배포
├── public/favicon.svg             # 병 모티프 파비콘
├── src/
│   ├── main.jsx                   # Router + LanguageProvider 부트스트랩
│   ├── App.jsx                    # 라우트 정의, ScrollToTop
│   ├── index.css                  # 전체 디자인 시스템
│   ├── i18n/
│   │   ├── LanguageContext.jsx    # lang 상태, toggleLang, t() 훅
│   │   └── translations.js        # EN/KO 문자열 사전
│   ├── data/
│   │   ├── categories.jsx         # 카테고리 6종 (아이콘 SVG + 컬러)
│   │   └── software.js            # 소프트웨어 레지스트리 (이중 언어)
│   ├── components/
│   │   ├── Logo.jsx               # 병 로고 (animated 옵션)
│   │   ├── Header.jsx / Footer.jsx
│   │   ├── CategoryCard.jsx / SoftwareCard.jsx
│   │   └── Board.jsx              # 게시판 (글/댓글, localStorage)
│   └── pages/
│       ├── Home.jsx               # 히어로 → Latest Software → 카테고리
│       ├── SoftwareIndex.jsx      # 카테고리 목록
│       ├── CategoryPage.jsx       # 카테고리별 소프트웨어 목록
│       ├── SoftwareDetail.jsx     # 개요/기능/벤치마크/기술스택 + 토론 탭
│       ├── BoardsIndex.jsx / BoardPage.jsx
│       ├── About.jsx              # Why Codecider + 미션/운영/향후계획
│       └── NotFound.jsx
└── vite.config.js                 # base = VITE_BASE (Pages: /CodeciderLab/)
```

### 라우트

| 경로 | 페이지 |
|---|---|
| `/` | 홈 (히어로, 최신 소프트웨어, 카테고리) |
| `/software` | 카테고리 목록 |
| `/software/:categoryId` | 카테고리별 소프트웨어 |
| `/software/:categoryId/:softwareId` | 상세 (개요 / 토론 탭) |
| `/boards`, `/boards/:softwareId` | 게시판 목록 / 개별 게시판 |
| `/about` | 조직 소개 |

## 4. 주요 기능

### 4.1 소프트웨어 카테고리 (6종, 전용 아이콘 + 컬러)

| ID | 이름 | 컬러 |
|---|---|---|
| `multimedia` | Multimedia / 멀티미디어 | `#7c5cd6` |
| `information` | Information / 정보 | `#e8913a` |
| `automation` | Office Automation / 업무 자동화 | `#3a7bd5` |
| `data` | Data Processing / 데이터 처리 | `#14a08c` |
| `utilities` | Utilities / 유틸리티 | `#46a758` |
| `emerging` | Emerging Tech / 신기술 연구 | `#5a67d8` |

### 4.2 다국어 (EN 기본 / KO 전환)

- 헤더의 `EN | KO` 토글 → `LanguageContext`가 전체 UI 문자열 전환
- 선택 언어는 `localStorage('codecider-lang')`에 저장
- UI 문자열은 `translations.js`, 소프트웨어 소개문은 `software.js`에
  `{ en, ko }` 형태로 관리

### 4.3 소프트웨어 상세 페이지

버전·출시일·라이선스·개발 언어 메타, 개요, 주요 기능, 벤치마크, 기술 스택,
Download / GitHub 버튼. 탭으로 토론 게시판 전환.

**등록된 소프트웨어**: [ultra-fast-zip](https://github.com/codeciderluke/ultra-fast-zip)
(Utilities, v1.0.0, MIT, Python 3.11+ — .ufz 포맷 블록 기반 Zstandard 압축 도구)

### 4.4 게시판

- 소프트웨어마다 독립 게시판 (`Board.jsx`, key: `codecider-board-<id>`)
- 글 작성(이름/제목/본문) + 댓글, 접기/펼치기 목록
- 현재 localStorage 기반 → 방문자 브라우저별 저장 (서버 연동은 향후 과제)

### 4.5 로고 (`Logo.jsx`)

- SVG 병: 그라데이션 유리 + 초록 캡 + 하이라이트
- 내부에 JS(노랑 사각), Python(블루/옐로 원), React(아톰), C++(파랑 원) 배지와 기포
- `animated` prop → 배지 bob + 기포 상승 애니메이션 (홈 히어로 전용)

## 5. 배포 파이프라인

1. `main` 푸시 → `.github/workflows/deploy.yml` 실행
2. `npm ci && npm run build` (`VITE_BASE=/CodeciderLab/`)
3. `dist/index.html → dist/404.html` 복사 (SPA 딥링크 폴백)
4. `actions/deploy-pages`로 GitHub Pages 게시

로컬 개발: `npm run dev` (http://localhost:5173) · 빌드: `npm run build`

## 6. 소프트웨어 추가 방법

`src/data/software.js` 배열에 항목 하나만 추가하면 카테고리 목록, 상세 페이지,
게시판이 자동 생성된다. 필수 필드:

```js
{
  id: 'my-tool',            // URL slug + 게시판 key
  name: 'My Tool',
  category: 'utilities',    // categories.jsx의 id
  version: '1.0.0', released: 'YYYY-MM-DD',
  license: 'MIT', language: 'Python 3.11+',
  github: '...', downloadUrl: '...',
  summary: { en, ko }, overview: { en, ko },
  features: { en: [...], ko: [...] },
  techStack: [...], benchmark: { en, ko },
}
```

## 7. 개발 이력 요약

1. Vite React 스캐폴드 생성, 사이트 전체 구축 (카테고리/i18n/상세/게시판)
2. 로고 리디자인 — 병 안에 언어 배지가 떠다니는 컨셉, 헤더 단순화,
   "Why Codecider?" 섹션을 홈 → About으로 이동
3. 홈 섹션 순서 변경: Latest Software를 카테고리 위로
4. GitHub 배포 — 저장소 public 전환, Pages + Actions 파이프라인 구성
5. 개인정보 제거 — 커밋 이력을 noreply 계정으로 재작성, 템플릿 잔여 파일 정리

## 8. 향후 과제

- [ ] 게시판 서버 백엔드 연동 (Firebase/Supabase 등) — 전체 방문자 글 공유
- [ ] 광고/후원 영역 (운영 방식), 프리미엄 콘텐츠 (전체 소스·설명서 판매)
- [ ] 소프트웨어 추가 등록 및 카테고리 확충
- [ ] 커스텀 도메인 연결 (선택)
