/* =========================================================
 * 수협 AI 교육 랜딩 페이지 설정
 *  - 자료를 추가하려면 FILES 배열에 항목을 추가하세요.
 *  - url 이 비어 있으면 "준비 중" 으로 표시됩니다.
 *  - category: manual(매뉴얼) | practice(실습 파일) | etc(참고 자료)
 * ========================================================= */
const CONFIG = {
  // 설문조사 주소 (예: 구글폼, 네이버폼 등). 비워 두면 "준비 중" 안내가 표시됩니다.
  surveyUrl: "",
  surveyWindow: { width: 720, height: 860 },

  files: [
    { title: "AI 교육 사용자 매뉴얼", desc: "교육 전반 사용 방법 안내서", category: "manual", type: "pdf", size: "", url: "" },
    { title: "시연 진행 가이드", desc: "단계별 시연 순서와 화면 설명", category: "manual", type: "pptx", size: "", url: "" },
    { title: "실습 데이터 파일", desc: "실습에 사용하는 예제 데이터", category: "practice", type: "xlsx", size: "", url: "" },
    { title: "실습 파일 묶음", desc: "실습용 파일 전체 압축본", category: "practice", type: "zip", size: "", url: "" },
    { title: "프롬프트 예시 모음", desc: "업무별 활용 프롬프트 참고 자료", category: "etc", type: "docx", size: "", url: "" },
  ],
};

const CATEGORY_LABEL = { manual: "매뉴얼", practice: "실습 파일", etc: "참고 자료" };
const DOWNLOAD_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"/></svg>';

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function renderFiles(filter = "all") {
  const grid = document.getElementById("fileGrid");
  const list = CONFIG.files.filter((f) => filter === "all" || f.category === filter);

  if (!list.length) {
    grid.innerHTML = '<li class="empty">등록된 자료가 없습니다.</li>';
    return;
  }

  grid.innerHTML = list
    .map((f) => {
      const type = (f.type || "etc").toLowerCase();
      const iconClass = ["pdf", "pptx", "xlsx", "docx", "hwp", "hwpx", "zip"].includes(type) ? type : "etc";
      const ready = Boolean(f.url);
      const chips = [
        `<span class="chip">${escapeHtml(CATEGORY_LABEL[f.category] || "자료")}</span>`,
        f.size ? `<span class="chip">${escapeHtml(f.size)}</span>` : "",
        ready ? "" : '<span class="chip">준비 중</span>',
      ].join("");
      const action = ready
        ? `<a class="file-dl" href="${escapeHtml(f.url)}" download aria-label="${escapeHtml(f.title)} 다운로드">${DOWNLOAD_ICON}</a>`
        : `<span class="file-dl" aria-label="준비 중" title="준비 중">${DOWNLOAD_ICON}</span>`;

      return `
        <li class="file-card${ready ? "" : " is-pending"}">
          <span class="file-icon ${iconClass}">${escapeHtml(type.toUpperCase())}</span>
          <div class="file-body">
            <p class="file-title">${escapeHtml(f.title)}</p>
            <p class="file-desc">${escapeHtml(f.desc || "")}</p>
            <div class="file-meta">${chips}</div>
          </div>
          ${action}
        </li>`;
    })
    .join("");
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", String(t === tab));
      });
      renderFiles(tab.dataset.filter);
    })
  );
}

function openSurvey() {
  const note = document.getElementById("surveyNote");
  if (!CONFIG.surveyUrl) {
    note.hidden = false;
    document.getElementById("survey").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  const { width, height } = CONFIG.surveyWindow;
  const left = Math.max(0, (window.screen.width - width) / 2);
  const top = Math.max(0, (window.screen.height - height) / 2);
  const win = window.open(
    CONFIG.surveyUrl,
    "suhyup_survey",
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
  );
  // 팝업이 차단되면 새 탭으로 엽니다.
  if (!win) window.open(CONFIG.surveyUrl, "_blank", "noopener");
}

document.addEventListener("DOMContentLoaded", () => {
  renderFiles();
  setupTabs();
  document.querySelectorAll("[data-open-survey]").forEach((b) => b.addEventListener("click", openSurvey));
});
