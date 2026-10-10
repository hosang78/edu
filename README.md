# 수협 AI 교육 랜딩 페이지

시연 교육 시 직원들이 실습 파일·매뉴얼을 내려받고, 설문조사를 별도 창으로 열 수 있는 정적 랜딩 페이지입니다.

## 구성
- `index.html` — 페이지 본문
- `assets/style.css` — 스타일 (수협/바다 테마)
- `assets/main.js` — **자료 목록과 설문 주소 설정 (`CONFIG`)**
- `files/manuals/`, `files/practice/` — 다운로드할 파일을 넣는 폴더

## 자료 추가
1. 파일을 `files/` 아래에 넣습니다.
2. `assets/main.js`의 `CONFIG.files`에 항목을 추가하고 `url`에 경로(예: `files/manuals/매뉴얼.pdf`)를 넣습니다.
   - `url`을 비워 두면 "준비 중"으로 표시됩니다.

## 설문조사 연결
`assets/main.js`의 `CONFIG.surveyUrl`에 설문 주소(구글폼 등)를 넣으면 버튼을 눌렀을 때 별도 팝업 창으로 열립니다.
