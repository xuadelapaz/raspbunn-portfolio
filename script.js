const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    const panel = document.getElementById(tab.dataset.tab);
    if (panel) panel.classList.add("active");
  });
});

document.querySelectorAll(".page-link").forEach(link => {
  link.addEventListener("click", event => {
    const page = link.dataset.page;
    if (!page) return;
    event.preventDefault();
    const file = page === "study-zone" ? "study-zone.html" : `${page}.html`;
    document.body.classList.add("page-closing");
    setTimeout(() => {
      window.location.href = file;
    }, 180);
  });
});

const pageCard = document.querySelector(".page-card");
if (pageCard) {
  pageCard.classList.add("page-card-visible");
}

// ---------- Commission requests ----------
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const commissionDetails = document.getElementById("commissionDetails");

if (document.querySelectorAll(".request[data-name]").length) {
  document.querySelectorAll(".request[data-name]").forEach(button => {
    button.addEventListener("click", () => {
      if (!modalText || !commissionDetails || !modal) return;
      modalText.textContent = `You're requesting "${button.dataset.name}". Tell the artist about your project.`;
      commissionDetails.value = "";
      modal.classList.add("show");
    });
  });
}

const sendRequestButton = document.getElementById("sendRequest");
if (sendRequestButton) {
  sendRequestButton.addEventListener("click", () => {
    if (!commissionDetails || !modal) return;
    if (!commissionDetails.value.trim()) {
      showToast("Please describe your project first.");
      commissionDetails.focus();
      return;
    }
    modal.classList.remove("show");
    showToast("Commission request saved! ✓");
  });
}

// ---------- Other buttons ----------
const shopAction = document.getElementById("shopAction");
if (shopAction) shopAction.addEventListener("click", () => showToast("Shop is currently empty."));

const collectionAction = document.getElementById("collectionAction");
if (collectionAction) collectionAction.addEventListener("click", () => showToast("Your collection is currently empty."));

// Bookmark buttons
document.querySelectorAll(".bookmark").forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = button.textContent === "♡" ? "♥" : "♡";
    showToast(button.textContent === "♥" ? "Saved to collection." : "Removed from collection.");
  });
});

// Close any modal
document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.close);
    if (target) target.classList.remove("show");
  });
});

document.querySelectorAll(".modal").forEach(m => {
  m.addEventListener("click", event => {
    if (event.target === m) m.classList.remove("show");
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal.show").forEach(m => m.classList.remove("show"));
  }
});

// Small notification system
let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
