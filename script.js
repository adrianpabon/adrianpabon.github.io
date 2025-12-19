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
      copyButton.textContent = "Copied";
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

initYear();
initCopyEmail();
