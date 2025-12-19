function setTheme(nextTheme) {
  document.documentElement.dataset.theme = nextTheme;
  try {
    localStorage.setItem("theme", nextTheme);
  } catch {
    // ignore
  }
}

function getCurrentTheme() {
  return document.documentElement.dataset.theme || "dark";
}

function initThemeToggle() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const syncLabel = () => {
    const theme = getCurrentTheme();
    button.textContent = theme === "dark" ? "Tema: oscuro" : "Tema: claro";
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  };

  button.addEventListener("click", () => {
    const theme = getCurrentTheme();
    setTheme(theme === "dark" ? "light" : "dark");
    syncLabel();
  });

  syncLabel();
}

function initYear() {
  const year = document.querySelector("[data-year]");
  if (!year) return;
  year.textContent = String(new Date().getFullYear());
}

function initCopyEmail() {
  const emailEl = document.querySelector("[data-email]");
  const copyButton = document.querySelector("[data-copy-email]");
  if (!emailEl || !copyButton) return;

  copyButton.addEventListener("click", async () => {
    const email = (emailEl.textContent || "").trim();
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      const prev = copyButton.textContent;
      copyButton.textContent = "Copiado";
      copyButton.disabled = true;
      window.setTimeout(() => {
        copyButton.textContent = prev;
        copyButton.disabled = false;
      }, 1200);
    } catch {
      window.location.href = `mailto:${encodeURIComponent(email)}`;
    }
  });
}

initThemeToggle();
initYear();
initCopyEmail();
