/* =========================================================
 * 수협 AI 교육 — 카드 목록
 *  action:
 *    - "download" : 파일 다운로드 (url 예: "files/skills/hwpx/파일.zip")
 *    - "link"     : 새 탭으로 열기
 *    - "popup"    : 별도 창(팝업)으로 열기 (설문조사 등)
 *  version / date : 버전·등록일 표시 (선택)
 *  notes          : 카드 안에 보여줄 안내 문구 목록 (선택)
 *  buttons        : 버튼이 여러 개일 때 [{ label, action, url }] 목록 (선택)
 *  evenButtons    : true 면 버튼을 모두 같은 모양으로 표시 (선택 항목이 대등할 때)
 *  url 을 비워 두면 "준비 중" 카드로 표시됩니다.
 * ========================================================= */
const CARDS = [
  {
    badge: "AI 스킬",
    title: "한글(HWPX) 문서 작성 스킬",
    desc: "AI가 수협 양식의 한글 보고서·공문을 HWPX 파일로 만들어 주는 스킬입니다. 사용하는 AI에 맞는 파일을 내려받으세요.",
    version: "ver2",
    date: "26.11.14",
    notes: [
      "<b>PC에서 등록</b>해야 사용할 수 있습니다. (zip 파일은 압축 풀지 말고 그대로 업로드)",
      "<b>Claude</b> : 설정 → Skills → 추가 → Skill 업로드",
      "<b>ChatGPT</b> : 플러그인 → 스킬 → 추가 → 컴퓨터에서 업로드",
      "<b>Gemini</b> : 설정 → 스킬 → 만들기 → 업로드하기",
      "<b>.hwpx 파일만</b> 지원합니다. .hwp 파일은 생성할 수 없습니다.",
    ],
    evenButtons: true,
    buttons: [
      { label: "Claude", action: "download", url: "files/skills/hwpx/hwpx_skill_claude.zip" },
      { label: "ChatGPT", action: "download", url: "files/skills/hwpx/hwpx_skill_chatgpt.zip" },
      { label: "Gemini", action: "download", url: "files/skills/hwpx/hwpx_skill_gemini.zip" },
    ],
  },
  {
    badge: "AI 스킬",
    title: "한글 문서 읽기 스킬 (HWP 리더)",
    desc: "AI가 한글 문서(.hwp, .hwpx)의 본문과 표를 읽어 요약·질의응답·문서 비교·내용 검수를 해 주는 스킬입니다. 사용하는 AI에 맞는 파일을 내려받으세요.",
    version: "ver1",
    date: "26.11.11",
    notes: [
      "<b>PC에서 등록</b>해야 사용할 수 있습니다. (zip 파일은 압축 풀지 말고 그대로 업로드)",
      "<b>Claude</b> : 설정 → Skills → 추가 → Skill 업로드",
      "<b>ChatGPT</b> : 플러그인 → 스킬 → 추가 → 컴퓨터에서 업로드",
      "<b>Gemini</b> : 설정 → 스킬 → 만들기 → 업로드하기",
      "<b>.hwp·.hwpx 모두 읽기</b> 가능합니다. 문서 작성·수정은 하지 않습니다.",
    ],
    evenButtons: true,
    buttons: [
      { label: "Claude", action: "download", url: "files/skills/hwp-reader/hwp_reader_claude.zip" },
      { label: "ChatGPT", action: "download", url: "files/skills/hwp-reader/hwp_reader_chatgpt.zip" },
      { label: "Gemini", action: "download", url: "files/skills/hwp-reader/hwp_reader_gemini.zip" },
    ],
  },
  {
    badge: "시연",
    title: "면세유 가격 비교",
    date: "26.10.11",
    desc: "오늘의 면세유 단가(경유·휘발유)를 입력하면 시장가격과 L당 비교해 보여주는 시연 페이지입니다.",
    notes: [
      "비교 대상 : <b>주유소 평균가</b>(오피넷), <b>국제 도매가·국제유가</b>, <b>환율</b>",
      "공공 API 데이터를 <b>매시간 자동 수집</b>해 반영합니다.",
    ],
    action: "link",
    buttonLabel: "시연 페이지 열기",
    url: "https://hosang78.github.io/oil/",
  },
  {
    badge: "업무 도구",
    title: "수협 프롬프트 생성기",
    version: "v3.09",
    date: "26.10.11",
    desc: "할 일을 고르고 내용을 적으면, AI에게 정확하게 일을 맡기는 요청문(프롬프트)을 만들어 주는 도구입니다.",
    notes: [
      "사용 순서 : <b>할 일 고르기 → 내용 입력·옵션 선택 → 복사해 AI에 붙여넣기</b>",
      "보고서·공문·회의록·메일·번역·엑셀 수식 등 <b>업무 유형별</b>로 제공합니다.",
      "내려받은 HTML 파일을 <b>더블클릭하면 브라우저에서 바로 실행</b>됩니다. (설치 불필요)",
      "사용 방법은 <b>도움말</b>을 함께 내려받아 확인하세요.",
    ],
    buttons: [
      { label: "생성기", action: "download", url: "files/prompt-generator/suhyup-prompt-generator_v3.09.html" },
      { label: "도움말", action: "download", url: "files/prompt-generator/suhyup-prompt-generator_v3.09_manual.html" },
    ],
  },
  {
    badge: "업무 도구",
    title: "수협 AI 이미지 프롬프트 메이커",
    version: "ver1",
    date: "26.10.11",
    desc: "원하는 조건을 고르기만 하면 이미지 생성 AI에 넣을 프롬프트를 자동으로 만들어 주는 도구입니다.",
    notes: [
      "사용 순서 : <b>생성 AI 선택 → 이미지 주제 입력 → 조건 선택 → 프롬프트 복사</b>",
      "스타일·분위기·구도·색감을 <b>예시 이미지로 보고 선택</b>하고, 어종·어구·어선 등 <b>수산 특화 요소</b>도 추가할 수 있습니다.",
      "ChatGPT, 웍스AI, Gemini 등에서 사용할 수 있습니다.",
      "내려받은 HTML 파일을 <b>더블클릭하면 브라우저에서 바로 실행</b>됩니다. (설치 불필요)",
    ],
    buttons: [
      { label: "프로그램", action: "download", url: "files/image-prompt/Sh_Image_Generator_ver1.html" },
      { label: "매뉴얼", action: "download", url: "files/image-prompt/suhyup_ai_image_prompt_manual.html" },
    ],
  },
  {
    badge: "시연",
    title: "수협 익명 채팅방",
    date: "26.10.12",
    desc: "회원가입 없이 비밀번호로 입장해 랜덤 닉네임으로 대화하는 사내 익명 채팅방 시연입니다.",
    notes: [
      "입장 비밀번호는 <b>교육 시간에 안내</b>합니다.",
      "첫 접속 시 서버가 깨어나는 데 <b>30초~1분</b> 정도 걸릴 수 있습니다.",
      "<b>GitHub</b> : 채팅방 프로그램(소스코드)을 보관하는 저장소",
      "<b>Render</b> : GitHub의 코드를 가져와 인터넷에서 접속할 수 있게 실행해 주는 서버",
      "<b>Neon</b> : 채팅 메시지를 저장하는 클라우드 데이터베이스",
    ],
    action: "link",
    buttonLabel: "채팅방 입장",
    url: "https://sh-poc-chat.onrender.com/",
  },
  {
    badge: "시연",
    title: "회원조합 아이디어 상품 설문",
    date: "26.11.03",
    desc: "회원조합 상품 중 마음에 드는 상품을 골라 투표하고, 결과를 실시간 통계로 확인하는 모바일 설문 시연입니다.",
    notes: [
      "조합 <b>개별상품 3개</b>, <b>복합상품 2개</b>를 선택해 제출합니다.",
      "입장 비밀번호는 <b>교육 시간에 안내</b>합니다.",
      "통계 : 개별상품 TOP 10, 복합상품 TOP 5, 시간대·일자별 응답 수",
      "<b>GitHub Pages</b>(화면) + <b>Neon</b>(응답 저장 데이터베이스)으로 만들었습니다.",
    ],
    action: "link",
    buttonLabel: "설문 참여하기",
    url: "https://hosang78.github.io/vote/",
  },
  {
    badge: "시연",
    title: "해양수산도감",
    date: "26.11.08",
    desc: "주요 수산물 235종을 휴대폰에서 검색하고 쉬운 설명과 그림으로 찾아보는 웹 도감입니다.",
    notes: [
      "이름 검색, <b>그룹·해역 필터</b>, 종별 상세 설명과 <b>원문 보기</b>를 제공합니다.",
      "자료 : 국립해양생물자원관 <b>해양생물종정보</b>(공공데이터포털, 26.11.07 기준)",
      "<b>Claude</b>가 설명 정리와 앱 개발, <b>ChatGPT</b>가 도감 그림 235장을 만들었습니다.",
      "설명·그림은 참고용이며 실제와 다를 수 있습니다.",
    ],
    action: "link",
    buttonLabel: "도감 열기",
    url: "https://hosang78.github.io/susan/",
  },
];

const POPUP_SIZE = { width: 720, height: 860 };

const ICONS = {
  download: '<path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"/>',
  link: '<path d="M7 17 17 7m0 0H9m8 0v8"/>',
  popup: '<path d="M14 4h6v6m0-6-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
};
const ACTION_LABEL = { download: "다운로드", link: "바로가기", popup: "새 창으로 열기" };

const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function renderButton(b) {
  if (!b.url) return `<span class="card-btn is-disabled">준비 중</span>`;
  const action = ICONS[b.action] ? b.action : "link";
  const icon = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[action]}</svg>`;
  const url = escapeHtml(b.url);
  const label = escapeHtml(b.label || ACTION_LABEL[action]);
  if (action === "download") return `<a class="card-btn" href="${url}" download>${icon}${label}</a>`;
  if (action === "popup") return `<button class="card-btn" type="button" data-popup="${url}">${icon}${label}</button>`;
  return `<a class="card-btn" href="${url}" target="_blank" rel="noopener">${icon}${label}</a>`;
}

function renderCard(c) {
  const buttons = c.buttons?.length ? c.buttons : [{ label: c.buttonLabel, action: c.action, url: c.url }];
  const ready = buttons.some((b) => b.url);

  const meta = [
    c.version ? `<span class="meta-chip">${escapeHtml(c.version)}</span>` : "",
    c.date ? `<span class="meta-date">등록일 ${escapeHtml(c.date)}</span>` : "",
  ].join("");
  // notes 는 이 파일에서 직접 작성하는 고정 문구이므로 <b> 강조를 허용합니다.
  const notes = c.notes?.length ? `<ul class="card-notes">${c.notes.map((n) => `<li>${n}</li>`).join("")}</ul>` : "";

  return `
    <li class="card${ready ? "" : " is-pending"}">
      <div class="card-top">
        <span class="card-badge">${escapeHtml(c.badge || "자료")}</span>
        ${meta ? `<span class="card-meta">${meta}</span>` : ""}
      </div>
      <h2 class="card-title">${escapeHtml(c.title)}</h2>
      ${c.desc ? `<p class="card-desc">${escapeHtml(c.desc)}</p>` : ""}
      ${notes}
      <div class="card-actions${c.evenButtons ? " is-even" : ""}">${buttons.map(renderButton).join("")}</div>
    </li>`;
}

function renderCards() {
  const grid = document.getElementById("cardGrid");
  grid.innerHTML = CARDS.length ? CARDS.map(renderCard).join("") : '<li class="empty">자료가 곧 추가됩니다.</li>';
}

function openPopup(url) {
  const { width, height } = POPUP_SIZE;
  const left = Math.max(0, (window.screen.width - width) / 2);
  const top = Math.max(0, (window.screen.height - height) / 2);
  const win = window.open(url, "suhyup_popup", `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`);
  if (!win) window.open(url, "_blank", "noopener"); // 팝업 차단 시 새 탭
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  document.getElementById("cardGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-popup]");
    if (btn) openPopup(btn.dataset.popup);
  });
});
