# 수협 AI 교육 랜딩 페이지

접속 주소: https://hosang78.github.io/edu/

- 카드 추가/수정: `assets/main.js`의 `CARDS` 배열
  - `action`: `download`(파일 다운로드) / `link`(새 탭) / `popup`(별도 창, 설문 등)
  - `version`, `date`: 버전·등록일 표시 / `notes`: 카드 안 안내 문구
  - `url`이 비어 있으면 "준비 중"으로 표시
- 파일은 `files/` 아래 항목별 하위 폴더로 관리
  - `files/skills/hwpx/` — 한글(HWPX) 문서 작성 스킬 (버전 교체 방법은 폴더 안 README 참고)
