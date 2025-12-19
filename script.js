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

function initNavToggle() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) {
      close();
    } else {
      open();
    }
  });

  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      close();
    }),
  );
}

function initSliders() {
  const sliders = document.querySelectorAll("[data-slider]");
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const track = slider.querySelector("[data-slider-track]");
    const slides = Array.from(slider.querySelectorAll(".slide"));
    const btnPrev = slider.querySelector("[data-slider-prev]");
    const btnNext = slider.querySelector("[data-slider-next]");
    const dotsContainer = slider.querySelector("[data-slider-dots]");
    if (!track || slides.length === 0 || !btnPrev || !btnNext || !dotsContainer) return;

    let index = 0;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
      dotsContainer.querySelectorAll("button").forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
      });
    };

    const goTo = (i) => {
      index = (i + slides.length) % slides.length;
      update();
    };

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "slider__dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    btnPrev.addEventListener("click", () => goTo(index - 1));
    btnNext.addEventListener("click", () => goTo(index + 1));

    update();
  });
}

initYear();
initCopyEmail();
initNavToggle();
initSliders();
