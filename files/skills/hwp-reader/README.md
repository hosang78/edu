# 한글(HWP·HWPX) 문서 읽기 스킬 (HWP 리더)

랜딩 페이지 두 번째 카드에서 AI별로 내려받는 스킬 파일을 관리하는 폴더입니다.

| 파일 | 대상 AI | 등록 위치 |
|------|---------|-----------|
| hwp_reader_claude.zip | Claude | 설정 → Skills → 추가 → Skill 업로드 |
| hwp_reader_chatgpt.zip | ChatGPT | 플러그인 → 스킬 → 추가 → 컴퓨터에서 업로드 |
| hwp_reader_gemini.zip | Gemini | 설정 → 스킬 → 만들기 → 업로드하기 |

## 버전 이력
| 버전 | 등록일 | 내용 |
|------|--------|------|
| ver1 | 26.11.11 | Claude·ChatGPT·Gemini용 3종 |

## 새 버전 올리는 방법
1. 이 폴더의 해당 AI용 zip 파일을 같은 이름으로 교체
2. `assets/main.js` 두 번째 카드의 `version`, `date` 수정
3. 위 버전 이력 표에 한 줄 추가
