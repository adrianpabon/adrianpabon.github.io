const SUPPORTED_LANGUAGES = ["en", "es"];
const LANGUAGE_STORAGE_KEY = "preferred-language";

const translations = {
  en: {
    "meta.description": "Senior Data and AI engineer specializing in ETL pipelines, LLM/RAG systems, and computer vision. Portfolio, projects, and research.",
    "meta.title": "Adrián Pabón Mendoza | Senior Data and AI Engineer",
    "meta.socialDescription": "ETL pipelines, LLM/RAG systems, and computer vision solutions with measurable business impact.",
    "meta.locale": "en_US",
    "image.profileAlt": "Photo of Adrián Pabón Mendoza",
    "intro.tagline": "Senior Data and AI Engineer focused on production LLM/RAG and computer vision systems.",
    "intro.experience": "AI engineer with 3 years of experience building production-ready solutions.",
    "intro.focus": "I design and deploy LLM, RAG, and computer vision systems with measurable business impact.",
    "language.selector": "Language selector",
    "nav.toggle": "Toggle navigation",
    "nav.primary": "Primary navigation",
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.research": "Research",
    "nav.interests": "Interests & Skills",
    "nav.contact": "Contact",
    "about.title": "About Me",
    "about.p1":
      "I am Adrián Pabón, an electronic engineer from Barranquilla, Colombia, with 3 years of experience in applied AI. I specialize in language models, computer vision, and cloud-based products for real users.",
    "about.p2":
      "I work across the full lifecycle, from idea and prototyping to deployment and iteration, collaborating with multidisciplinary teams to deliver robust and scalable solutions.",
    "about.p3":
      "I have worked across research and industry, from scaling AI assistants for 13,000+ users to deploying computer vision pipelines that reduced manual camera review by 80%.",
    "experience.title": "Experience",
    "experience.role1.title": "Senior Data and AI Engineer · nyxn",
    "experience.role1.desc":
      "Leading the migration of core banking procedures to GenAI-optimized microservices and event-driven architectures. Designing serverless AWS solutions (Lambda, Step Functions, Bedrock) for secure, scalable AI workflows.",
    "experience.role1.meta": "Remote, Colombia · Feb 2026 - Present",
    "experience.role2.title": "AI Product Specialist / AI Engineer · Optimize IT SAS",
    "experience.role2.desc":
      "Improved theft detection with computer vision, reducing manual review by 80%. Delivered LLM/RAG APIs with embeddings + vector search and automated OCI backup workflows with serverless functions.",
    "experience.role2.meta": "Barranquilla, Colombia · Jul 2024 - Feb 2026",
    "experience.role3.title": "AI Researcher & Developer · Universidad del Norte",
    "experience.role3.desc":
      "Built and scaled NAIA to 13,000+ users. Integrated OpenAI LLMs, Redis state management, Azure services, and Microsoft Graph APIs to provide secure assistant capabilities in 3-5 seconds.",
    "experience.role3.meta": "Barranquilla, Colombia · Jan 2024 - Nov 2025",
    "projects.title": "Projects",
    "projects.naia.image1Alt": "NAIA assistant interface mock",
    "projects.naia.image2Alt": "Dashboard analytics for NAIA usage",
    "projects.naia.image3Alt": "System architecture sketch for NAIA",
    "slider.previousImage": "Previous image",
    "slider.nextImage": "Next image",
    "slider.pagination": "Slider pagination",
    "slider.goToSlide": "Go to slide {{index}}",
    "projects.naia.description":
      "Multi-role assistant for Universidad del Norte that combines LLMs, RAG, Redis state, Azure services, and Microsoft Graph integrations for academic and administrative workflows.",
    "projects.naia.link": "Link to the project",
    "projects.naia.demo": "Watch demo",
    "projects.callCenter.title": "AI Agent Implementation for Medical Call Center",
    "projects.callCenter.description":
      "Intelligent voice agents for outbound campaigns in a clinical laboratory. Implemented tool-calling logic for real-time appointment and lab result validation connected directly to medical databases.",
    "projects.callCenter.meta": "2026 · Impact: 50% reduction in routine call handling time",
    "projects.theft.title": "Theft Detection (Computer Vision)",
    "projects.theft.description":
      "Production CV pipeline for micro-market security, including dataset curation, labeling, model training/validation, and hold-out evaluation.",
    "projects.theft.meta": "2024 · Impact: 80% reduction in manual camera review time",
    "research.title": "Research",
    "research.googleScholar": "Google Scholar",
    "research.authors": "Authors:",
    "research.viewPaper": "View paper",
    "interests.title": "Interests & Skills",
    "interests.hardSkills": "Hard skills",
    "interests.softSkills": "Soft skills",
    "interests.soft.problemSolving": "Problem solving",
    "interests.soft.communication": "Clear communication",
    "interests.soft.writing": "Technical writing",
    "interests.soft.teamwork": "Team collaboration",
    "interests.soft.ownership": "Ownership",
    "interests.soft.prototyping": "Fast prototyping",
    "contact.title": "Contact",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.orcid": "ORCID",
    "contact.cv": "CV",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.download": "Download",
    "footer.updatedLabel": "Last updated:",
  },
  es: {
    "meta.description": "Ingeniero de Datos e IA especializado en pipelines ETL, sistemas LLM/RAG y visión por computador. Portafolio, proyectos e investigación.",
    "meta.title": "Adrián Pabón Mendoza | Ingeniero de Datos e IA",
    "meta.socialDescription":
      "Pipelines ETL, sistemas LLM/RAG y soluciones de visión por computador con impacto medible en negocio.",
    "meta.locale": "es_CO",
    "image.profileAlt": "Foto de Adrián Pabón Mendoza",
    "intro.tagline": "Ingeniero senior de datos e IA enfocado en sistemas LLM/RAG y visión por computador en producción.",
    "intro.experience": "Ingeniero de IA con 3 años de experiencia construyendo soluciones listas para producción.",
    "intro.focus": "Diseño e implemento sistemas con LLM, RAG y visión por computador con impacto medible en negocio.",
    "language.selector": "Selector de idioma",
    "nav.toggle": "Mostrar navegación",
    "nav.primary": "Navegación principal",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.research": "Investigación",
    "nav.interests": "Intereses y habilidades",
    "nav.contact": "Contacto",
    "about.title": "Sobre mí",
    "about.p1":
      "Soy Adrián Pabón, ingeniero electrónico de Barranquilla, Colombia, con 3 años de experiencia en IA aplicada. Me especializo en modelos de lenguaje, visión por computador y productos en la nube para usuarios reales.",
    "about.p2":
      "Trabajo todo el ciclo de vida, desde la idea y el prototipado hasta el despliegue y la iteración, colaborando con equipos multidisciplinarios para entregar soluciones robustas y escalables.",
    "about.p3":
      "He trabajado entre investigación e industria, escalando asistentes de IA para más de 13,000 usuarios y desplegando pipelines de visión por computador que redujeron en 80% la revisión manual de cámaras.",
    "experience.title": "Experiencia",
    "experience.role1.title": "Ingeniero Senior de Datos e IA · nyxn",
    "experience.role1.desc":
      "Lidero la migración de procesos core de banca a microservicios optimizados con GenAI y arquitecturas event-driven. Diseño soluciones serverless en AWS (Lambda, Step Functions, Bedrock) para flujos de IA seguros y escalables.",
    "experience.role1.meta": "Remoto, Colombia · Feb 2026 - Actualidad",
    "experience.role2.title": "Especialista de Producto IA / Ingeniero IA · Optimize IT SAS",
    "experience.role2.desc":
      "Mejoré la detección de robos con visión por computador, reduciendo 80% la revisión manual. Entregué APIs con LLM/RAG, embeddings y búsqueda vectorial, junto con respaldos automatizados en OCI con funciones serverless.",
    "experience.role2.meta": "Barranquilla, Colombia · Jul 2024 - Feb 2026",
    "experience.role3.title": "Investigador y Desarrollador de IA · Universidad del Norte",
    "experience.role3.desc":
      "Construí y escalé NAIA para más de 13,000 usuarios. Integré LLMs de OpenAI, estado con Redis, servicios de Azure y Microsoft Graph para ofrecer capacidades seguras en 3-5 segundos.",
    "experience.role3.meta": "Barranquilla, Colombia · Ene 2024 - Nov 2025",
    "projects.title": "Proyectos",
    "projects.naia.image1Alt": "Interfaz del asistente NAIA",
    "projects.naia.image2Alt": "Panel de analítica de uso de NAIA",
    "projects.naia.image3Alt": "Esquema de arquitectura del sistema NAIA",
    "slider.previousImage": "Imagen anterior",
    "slider.nextImage": "Imagen siguiente",
    "slider.pagination": "Paginación del carrusel",
    "slider.goToSlide": "Ir a la diapositiva {{index}}",
    "projects.naia.description":
      "Asistente de múltiples roles para la Universidad del Norte que combina LLMs, RAG, estado en Redis, servicios de Azure e integraciones con Microsoft Graph para flujos académicos y administrativos.",
    "projects.naia.link": "Enlace al proyecto",
    "projects.naia.demo": "Ver demo",
    "projects.callCenter.title": "Implementación de Agente de IA para Call Center Médico",
    "projects.callCenter.description":
      "Agentes de voz inteligentes para campañas salientes en laboratorio clínico. Implementé lógica de tool-calling para validar citas y resultados en tiempo real conectados directamente a bases médicas.",
    "projects.callCenter.meta": "2026 · Impacto: 50% menos tiempo en llamadas rutinarias",
    "projects.theft.title": "Detección de Robos (Visión por Computador)",
    "projects.theft.description":
      "Pipeline productivo de visión por computador para seguridad en micro-mercados, incluyendo curación de datos, etiquetado, entrenamiento/validación de modelos y evaluación hold-out.",
    "projects.theft.meta": "2024 · Impacto: 80% menos tiempo de revisión manual de cámaras",
    "research.title": "Investigación",
    "research.googleScholar": "Google Scholar",
    "research.authors": "Autores:",
    "research.viewPaper": "Ver artículo",
    "interests.title": "Intereses y habilidades",
    "interests.hardSkills": "Habilidades técnicas",
    "interests.softSkills": "Habilidades blandas",
    "interests.soft.problemSolving": "Resolución de problemas",
    "interests.soft.communication": "Comunicación clara",
    "interests.soft.writing": "Escritura técnica",
    "interests.soft.teamwork": "Trabajo en equipo",
    "interests.soft.ownership": "Responsabilidad",
    "interests.soft.prototyping": "Prototipado rápido",
    "contact.title": "Contacto",
    "contact.email": "Correo",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.orcid": "ORCID",
    "contact.cv": "CV",
    "contact.copy": "Copiar",
    "contact.copied": "Copiado",
    "contact.download": "Descargar",
    "footer.updatedLabel": "Última actualización:",
  },
};

let currentLanguage = "en";

function initYear() {
  const year = document.querySelector("[data-year]");
  if (!year) return;
  year.textContent = String(new Date().getFullYear());
}

function getMessage(key, language = currentLanguage) {
  const languagePack = translations[language] || translations.en;
  return languagePack[key] || translations.en[key] || "";
}

function interpolate(template, values) {
  return template.replace(/{{\s*(\w+)\s*}}/g, (_, token) => String(values[token] ?? ""));
}

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }
  } catch {
    return null;
  }
  return null;
}

function getPreferredLanguage() {
  const stored = getStoredLanguage();
  if (stored) return stored;

  const browserLanguage = (navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : "en";
}

function updateLastUpdated() {
  const lastUpdated = document.querySelector("[data-last-updated]");
  if (!lastUpdated) return;

  const locale = currentLanguage === "es" ? "es-CO" : "en-US";
  const now = new Date();
  const formatted = now.toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  });

  lastUpdated.textContent = formatted;
}

function updateTranslatableText() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    node.textContent = getMessage(key);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria-label");
    if (!key) return;
    node.setAttribute("aria-label", getMessage(key));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    const key = node.getAttribute("data-i18n-alt");
    if (!key) return;
    node.setAttribute("alt", getMessage(key));
  });

  document.querySelectorAll("[data-i18n-content]").forEach((node) => {
    const key = node.getAttribute("data-i18n-content");
    if (!key) return;
    node.setAttribute("content", getMessage(key));
  });
}

function updateLanguageSwitch() {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.getAttribute("data-lang-option") === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateSliderDotsLabels() {
  const template = getMessage("slider.goToSlide");
  document.querySelectorAll(".slider__dot").forEach((dot) => {
    const index = Number(dot.getAttribute("data-slide-index") || "1");
    dot.setAttribute("aria-label", interpolate(template, { index }));
  });
}

function setLanguage(language, persist = true) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  updateTranslatableText();
  updateLanguageSwitch();
  updateSliderDotsLabels();
  updateLastUpdated();

  if (persist) {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      return;
    }
  }
}

function initLanguageToggle() {
  const options = document.querySelectorAll("[data-lang-option]");

  options.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLanguage = button.getAttribute("data-lang-option") || "en";
      setLanguage(selectedLanguage);
    });
  });

  setLanguage(getPreferredLanguage(), false);
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
      copyButton.textContent = getMessage("contact.copied");
      copyButton.disabled = true;
      window.setTimeout(() => {
        copyButton.textContent = getMessage("contact.copy");
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

    const goToSlideLabel = getMessage("slider.goToSlide");

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "slider__dot";
      dot.type = "button";
      dot.setAttribute("data-slide-index", String(i + 1));
      dot.setAttribute("aria-label", interpolate(goToSlideLabel, { index: i + 1 }));
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    btnPrev.addEventListener("click", () => goTo(index - 1));
    btnNext.addEventListener("click", () => goTo(index + 1));

    update();
  });

  updateSliderDotsLabels();
}

initYear();
initNavToggle();
initLanguageToggle();
initCopyEmail();
initSliders();
