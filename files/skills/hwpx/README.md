# 한글(HWPX) 문서 작성 스킬

랜딩 페이지 첫 번째 카드에서 AI별로 내려받는 스킬 파일을 관리하는 폴더입니다.

| 파일 | 대상 AI | 등록 위치 |
|------|---------|-----------|
| hwpx_skill_claude.zip | Claude | 설정 → Skills → 추가 → Skill 업로드 |
| hwpx_skill_chatgpt.zip | ChatGPT | 플러그인 → 스킬 → 추가 → 컴퓨터에서 업로드 |
| hwpx_skill_gemini.zip | Gemini | 설정 → 스킬 → 만들기 → 업로드하기 |

## 버전 이력
| 버전 | 등록일 | 내용 |
|------|--------|------|
| ver1 | 26.10.10 | Claude용 1종 (git 이력에 보관) |
| ver2 | 26.10.21 | Claude용 교체 |
| ver2 | 26.11.02 | Claude·ChatGPT·Gemini용 3종으로 확대 (Claude용은 26.10.21 파일과 동일) |

## 새 버전 올리는 방법
1. 이 폴더의 해당 AI용 zip 파일을 같은 이름으로 교체
2. `assets/main.js` 첫 번째 카드의 `version`, `date` 수정
3. 위 버전 이력 표에 한 줄 추가
