/* =========================================================
 * 수협 AI 교육 — 카드 목록
 *  action:
 *    - "download" : 파일 다운로드 (url 예: "files/skills/hwpx/파일.zip")
 *    - "link"     : 새 탭으로 열기
 *    - "popup"    : 별도 창(팝업)으로 열기 (설문조사 등)
 *  version / date : 버전·등록일 표시 (선택)
 *  notes          : 카드 안에 보여줄 안내 문구 목록 (선택)
 *  url 을 비워 두면 "준비 중" 카드로 표시됩니다.
 * ========================================================= */
const CARDS = [
  {
    badge: "Claude 스킬",
    title: "한글(HWPX) 문서 작성 스킬",
    desc: "Claude가 수협 양식의 한글 보고서·공문을 HWPX 파일로 만들어 주는 스킬입니다.",
    version: "ver1",
    date: "26.10.10",
    notes: [
      "<b>PC에서 등록</b>해야 사용할 수 있습니다.",
      "등록 위치 : Claude 앱(또는 claude.ai) → <b>설정 → 기능 → 스킬</b> → 내려받은 zip 파일 업로드 (압축 풀지 말고 그대로)",
      "<b>.hwpx 파일만</b> 지원합니다. .hwp 파일은 생성할 수 없습니다.",
    ],
    action: "download",
    url: "files/skills/hwpx/suhyup_hwp_skill_ver1.zip",
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

function renderCard(c, i) {
  const ready = Boolean(c.url);
  const action = ICONS[c.action] ? c.action : "link";
  const icon = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[action]}</svg>`;
  const url = escapeHtml(c.url);
  const label = escapeHtml(c.buttonLabel || ACTION_LABEL[action]);

  const meta = [
    c.version ? `<span class="meta-chip">${escapeHtml(c.version)}</span>` : "",
    c.date ? `<span class="meta-date">등록일 ${escapeHtml(c.date)}</span>` : "",
  ].join("");
  // notes 는 이 파일에서 직접 작성하는 고정 문구이므로 <b> 강조를 허용합니다.
  const notes = c.notes?.length ? `<ul class="card-notes">${c.notes.map((n) => `<li>${n}</li>`).join("")}</ul>` : "";

  let button;
  if (!ready) button = `<span class="card-btn is-disabled">준비 중</span>`;
  else if (action === "download") button = `<a class="card-btn" href="${url}" download>${icon}${label}</a>`;
  else if (action === "popup") button = `<button class="card-btn" type="button" data-popup="${i}">${icon}${label}</button>`;
  else button = `<a class="card-btn" href="${url}" target="_blank" rel="noopener">${icon}${label}</a>`;

  return `
    <li class="card${ready ? "" : " is-pending"}">
      <div class="card-top">
        <span class="card-badge">${escapeHtml(c.badge || "자료")}</span>
        ${meta ? `<span class="card-meta">${meta}</span>` : ""}
      </div>
      <h2 class="card-title">${escapeHtml(c.title)}</h2>
      ${c.desc ? `<p class="card-desc">${escapeHtml(c.desc)}</p>` : ""}
      ${notes}
      <div class="card-actions">${button}</div>
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
    if (btn) openPopup(CARDS[Number(btn.dataset.popup)].url);
  });
});
