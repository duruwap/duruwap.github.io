# duruwap.github.io

duruwap studio의 정적 사이트 전체를 이 저장소 하나에서 관리합니다. GitHub Pages(사용자 사이트, `main` 브랜치 루트)로 게시합니다: https://duruwap.github.io/

## 폴더 구조

```
app-ads.txt     광고(AdMob) 판매자 인증 — https://duruwap.github.io/app-ads.txt
.nojekyll       Jekyll 처리 끄기 (파일을 그대로 게시)
support/        앱 고객 지원 · 개인정보 처리방침 — https://duruwap.github.io/support/
app-support/    리다이렉트 전용. 예전 주소 /app-support/… 를 같은 경로의 /support/… 로 넘긴다
```

`support/`는 예전 `duruwap/app-support` 저장소의 내용을 구조 그대로 옮긴 것입니다(절대 주소만 `/app-support/` → `/support/`로 바꿈). 페이지 구성·스토어 버튼·새 서비스 추가 방법은 그 저장소의 README와 같습니다.

`app-support/`의 각 HTML은 쿼리(`?lang=en` 등)와 해시를 유지한 채 `/support/<같은 경로>`로 이동하는 작은 페이지입니다. 정적 파일(assets·fonts)은 두지 않습니다. 새 페이지는 `support/`에만 추가하면 되고, 여기에는 추가하지 않습니다.

## 앱별 문서 주소

| 서비스 | 개인정보 처리방침 | 고객 지원 |
|---|---|---|
| 드래그 넘버 (Drag Number) | [ko](https://duruwap.github.io/support/drag-number/privacy/ko.html) · [en](https://duruwap.github.io/support/drag-number/privacy/en.html) · [cn](https://duruwap.github.io/support/drag-number/privacy/cn.html) · [jp](https://duruwap.github.io/support/drag-number/privacy/jp.html) | [ko](https://duruwap.github.io/support/drag-number/support/ko.html) · [en](https://duruwap.github.io/support/drag-number/support/en.html) |
| 일색오목 (One-Color Gomoku) | [ko](https://duruwap.github.io/support/omok/privacy/ko.html) · [en](https://duruwap.github.io/support/omok/privacy/en.html) · [zh](https://duruwap.github.io/support/omok/privacy/zh.html) · [ja](https://duruwap.github.io/support/omok/privacy/ja.html) | [ko](https://duruwap.github.io/support/omok/support/ko.html) · [en](https://duruwap.github.io/support/omok/support/en.html) · [zh](https://duruwap.github.io/support/omok/support/zh.html) · [ja](https://duruwap.github.io/support/omok/support/ja.html) |

스토어(App Store Connect · Google Play Console)의 지원 URL·개인정보 처리방침 URL은 위 `/support/…` 주소를 사용합니다.

문의: [duruwap@naver.com](mailto:duruwap@naver.com)
