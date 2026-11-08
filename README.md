# duruwap.github.io

duruwap studio의 정적 사이트 전체를 이 저장소 하나에서 관리합니다. GitHub Pages(사용자 사이트, `main` 브랜치 루트)로 게시합니다: https://duruwap.github.io/

## 폴더 구조

```
index.html      첫 화면 — 앱 목록, 스토어 버튼, 문서 바로가기 (https://duruwap.github.io/)
app-ads.txt     광고(AdMob) 판매자 인증 — https://duruwap.github.io/app-ads.txt
.nojekyll       Jekyll 처리 끄기 (파일을 그대로 게시)
support/        앱 고객 지원 · 개인정보 처리방침 — https://duruwap.github.io/support/
app-support/    리다이렉트 전용. 예전 주소 /app-support/… 를 같은 경로의 /support/… 로 넘긴다
```

`support/`는 예전 `duruwap/app-support` 저장소의 내용을 구조 그대로 옮긴 것입니다(절대 주소만 `/app-support/` → `/support/`로 바꿈). 페이지 구성·스토어 버튼·새 서비스 추가 방법은 그 저장소의 README와 같습니다.

`app-support/`의 각 HTML은 쿼리(`?lang=en` 등)와 해시를 유지한 채 `/support/<같은 경로>`로 이동하는 작은 페이지입니다. 정적 파일(assets·fonts)은 두지 않습니다. 새 페이지는 `support/`에만 추가하면 되고, 여기에는 추가하지 않습니다.

## 스토어 주소 넣기

앱별 스토어 주소는 `support/<앱>/store.js` 한 곳에만 적습니다. 첫 화면과 모든 언어의 고객 지원 페이지 버튼이 함께 바뀝니다.
주소가 빈 문자열이면 버튼 위에 「출시 예정」 표시가 겹쳐 보이고, 누르면 안내 창이 뜹니다.

## 브랜드 이미지

`support/assets/brand/`: `logo.svg`(파비콘), `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png`, `og-image.png`(링크 미리보기 1200×630).
머리글의 로고는 각 HTML에 SVG로 직접 들어 있습니다. 첫 화면 앱 아이콘은 `support/assets/apps/<앱>.png`(256×256, 실제 앱 아이콘)입니다.

## 앱별 문서 주소

| 서비스 | 개인정보 처리방침 | 고객 지원 |
|---|---|---|
| 드래그 넘버 (Drag Number) | [ko](https://duruwap.github.io/support/drag-number/privacy/ko.html) · [en](https://duruwap.github.io/support/drag-number/privacy/en.html) · [cn](https://duruwap.github.io/support/drag-number/privacy/cn.html) · [jp](https://duruwap.github.io/support/drag-number/privacy/jp.html) | [ko](https://duruwap.github.io/support/drag-number/support/ko.html) · [en](https://duruwap.github.io/support/drag-number/support/en.html) |
| 일색오목 (One-Color Gomoku) | [ko](https://duruwap.github.io/support/omok/privacy/ko.html) · [en](https://duruwap.github.io/support/omok/privacy/en.html) · [zh](https://duruwap.github.io/support/omok/privacy/zh.html) · [ja](https://duruwap.github.io/support/omok/privacy/ja.html) | [ko](https://duruwap.github.io/support/omok/support/ko.html) · [en](https://duruwap.github.io/support/omok/support/en.html) · [zh](https://duruwap.github.io/support/omok/support/zh.html) · [ja](https://duruwap.github.io/support/omok/support/ja.html) |

스토어(App Store Connect · Google Play Console)의 지원 URL·개인정보 처리방침 URL은 위 `/support/…` 주소를 사용합니다.

문의: [duruwap@naver.com](mailto:duruwap@naver.com)
