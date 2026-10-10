/* =========================================================
 * 수협 AI 교육 — 카드 목록
 *  action:
 *    - "download" : 파일 다운로드 (url 예: "files/매뉴얼.pdf")
 *    - "link"     : 새 탭으로 열기
 *    - "popup"    : 별도 창(팝업)으로 열기 (설문조사 등)
 *  url 을 비워 두면 "준비 중" 카드로 표시됩니다.
 * ========================================================= */
const CARDS = [
  // { badge: "매뉴얼", title: "AI 교육 매뉴얼", desc: "교육 전반 사용 방법", action: "download", url: "files/manual.pdf" },
];

const POPUP_SIZE = { width: 720, height: 860 };

const ICONS = {
  download: '<path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"/>',
  link: '<path d="M7 17 17 7m0 0H9m8 0v8"/>',
  popup: '<path d="M14 4h6v6m0-6-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
};

const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function cardInner(c, ready) {
  const icon = ICONS[c.action] || ICONS.link;
  return `
    <div class="card-top">
      <span class="card-badge">${escapeHtml(ready ? c.badge || "자료" : "준비 중")}</span>
      <span class="card-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg></span>
    </div>
    <p class="card-title">${escapeHtml(c.title)}</p>
    ${c.desc ? `<p class="card-desc">${escapeHtml(c.desc)}</p>` : ""}`;
}

function renderCards() {
  const grid = document.getElementById("cardGrid");
  if (!CARDS.length) {
    grid.innerHTML = '<li class="empty">자료가 곧 추가됩니다.</li>';
    return;
  }
  grid.innerHTML = CARDS.map((c, i) => {
    const ready = Boolean(c.url);
    const url = escapeHtml(c.url);
    let el;
    if (!ready) el = `<div class="card is-pending">${cardInner(c, false)}</div>`;
    else if (c.action === "download") el = `<a class="card" href="${url}" download>${cardInner(c, true)}</a>`;
    else if (c.action === "popup") el = `<button class="card" type="button" data-popup="${i}">${cardInner(c, true)}</button>`;
    else el = `<a class="card" href="${url}" target="_blank" rel="noopener">${cardInner(c, true)}</a>`;
    return `<li>${el}</li>`;
  }).join("");
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
