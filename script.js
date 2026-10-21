const SUPPORTED_LANGUAGES = ["en", "es"];

const translations = {
  en: {
    "meta.description":
      "Senior AI & Data Engineer in Colombia building production GenAI on AWS: agentic AI systems, LLM/RAG, serverless event-driven architectures, and Java microservices. Open to Senior AI/ML and Data Engineering roles.",
    "meta.title": "Adrián Pabón Mendoza | Senior AI & Data Engineer · GenAI, AWS, Agentic AI",
    "meta.socialDescription":
      "Production GenAI on AWS: agentic AI systems, LLM/RAG, and serverless event-driven architectures with measurable impact.",
    "meta.locale": "en_US",
    "image.profileAlt": "Photo of Adrián Pabón Mendoza",
    "intro.tagline": "I build production GenAI systems: agentic architectures, LLM/RAG assistants, and serverless data platforms on AWS.",
    "intro.experience": "Senior Data and AI Engineer with 3 years of experience taking applied AI from prototype to production.",
    "intro.focus": "My work connects language models, data pipelines, and cloud infrastructure with measurable business impact.",
    "intro.availability": "Senior Data and AI Engineer at nyxn · open to Senior AI, ML, and Data Engineering roles.",
    "intro.metricUsers": "users reached",
    "intro.metricReview": "less manual review",
    "intro.metricLatency": "assistant responses",
    "intro.metricDocs": "migration docs time",
    "intro.cvCta": "Download CV",
    "intro.contactCta": "Contact me",
    "language.selector": "Language selector",
    "nav.toggle": "Toggle navigation",
    "nav.primary": "Primary navigation",
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.research": "Research",
    "nav.notes": "Notes",
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
    "experience.role1.point1":
      "Designed and orchestrated a serverless, event-driven AWS product to track open roles across the company (Lambda, DynamoDB, EventBridge, S3, Bedrock, API Gateway, Cognito, SES).",
    "experience.role1.point2":
      "Built an agentic architecture that migrates stored procedures to Java 25 microservices with hexagonal architecture: SP and dependency analysis, logic migration, and construction of adapters, models, and utilities.",
    "experience.role1.point3":
      "Cut technical documentation time for SP migrations (Sonar, Prisma, Veracode, unit tests) from 2 days to 2 hours.",
    "experience.role1.meta": "Remote, Colombia · Feb 2026 - Present",
    "experience.role2.title": "AI Product Specialist / AI Engineer · Optimize IT SAS",
    "experience.role2.point1":
      "Improved theft detection with computer vision, reducing manual review by 80%.",
    "experience.role2.point2":
      "Delivered LLM/RAG APIs with embeddings and vector search.",
    "experience.role2.point3":
      "Automated OCI backup workflows with serverless functions.",
    "experience.role2.meta": "Barranquilla, Colombia · Jul 2024 - Feb 2026",
    "experience.role3.title": "AI Researcher & Developer · Universidad del Norte",
    "experience.role3.point1":
      "Built and scaled NAIA to 13,000+ users.",
    "experience.role3.point2":
      "Integrated OpenAI LLMs, Redis state management, Azure services, and Microsoft Graph APIs to provide secure assistant capabilities in 3-5 seconds.",
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
    "notes.title": "Engineering Notes",
    "notes.lead": "Short ideas I would expand into posts: practical lessons from building AI systems for real users.",
    "notes.note1.meta": "AI assistants",
    "notes.note1.title": "Lessons from scaling an AI assistant to 13,000+ users",
    "notes.note2.meta": "RAG systems",
    "notes.note2.title": "Why retrieval quality matters more than prompt tricks",
    "notes.note3.meta": "Computer vision",
    "notes.note3.title": "Computer vision projects fail before model training",
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
    "meta.description":
      "Ingeniero Senior de IA y Datos en Colombia que construye GenAI en producción sobre AWS: sistemas de IA agéntica, LLM/RAG, arquitecturas serverless event-driven y microservicios en Java. Abierto a roles Senior de IA/ML e Ingeniería de Datos.",
    "meta.title": "Adrián Pabón Mendoza | Ingeniero Senior de IA y Datos · GenAI, AWS, IA agéntica",
    "meta.socialDescription":
      "GenAI en producción sobre AWS: sistemas de IA agéntica, LLM/RAG y arquitecturas serverless event-driven con impacto medible.",
    "meta.locale": "es_CO",
    "image.profileAlt": "Foto de Adrián Pabón Mendoza",
    "intro.tagline": "Construyo sistemas GenAI en producción: arquitecturas agénticas, asistentes LLM/RAG y plataformas de datos serverless en AWS.",
    "intro.experience": "Ingeniero Senior de Datos e IA con 3 años de experiencia llevando IA aplicada de prototipo a producción.",
    "intro.focus": "Mi trabajo conecta modelos de lenguaje, pipelines de datos e infraestructura cloud con impacto medible en negocio.",
    "intro.availability": "Ingeniero Senior de Datos e IA en nyxn · abierto a roles Senior de IA, ML e Ingeniería de Datos.",
    "intro.metricUsers": "usuarios alcanzados",
    "intro.metricReview": "menos revisión manual",
    "intro.metricLatency": "respuestas del asistente",
    "intro.metricDocs": "documentación por migración",
    "intro.cvCta": "Descargar CV",
    "intro.contactCta": "Contáctame",
    "language.selector": "Selector de idioma",
    "nav.toggle": "Mostrar navegación",
    "nav.primary": "Navegación principal",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.research": "Investigación",
    "nav.notes": "Notas",
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
    "experience.role1.point1":
      "Diseñé y orquesté un producto serverless y event-driven en AWS para hacer seguimiento de los roles abiertos en la compañía (Lambda, DynamoDB, EventBridge, S3, Bedrock, API Gateway, Cognito, SES).",
    "experience.role1.point2":
      "Construí una arquitectura agéntica que migra stored procedures a microservicios en Java 25 con arquitectura hexagonal: análisis del SP y sus dependencias, migración de la lógica y construcción de adapters, modelos y utilidades.",
    "experience.role1.point3":
      "Reduje el tiempo de documentación técnica de las migraciones de SP (Sonar, Prisma, Veracode, pruebas unitarias) de 2 días a 2 horas.",
    "experience.role1.meta": "Remoto, Colombia · Feb 2026 - Actualidad",
    "experience.role2.title": "Especialista de Producto IA / Ingeniero IA · Optimize IT SAS",
    "experience.role2.point1":
      "Mejoré la detección de robos con visión por computador, reduciendo 80% la revisión manual.",
    "experience.role2.point2":
      "Entregué APIs con LLM/RAG, embeddings y búsqueda vectorial.",
    "experience.role2.point3":
      "Automaticé respaldos en OCI con funciones serverless.",
    "experience.role2.meta": "Barranquilla, Colombia · Jul 2024 - Feb 2026",
    "experience.role3.title": "Investigador y Desarrollador de IA · Universidad del Norte",
    "experience.role3.point1":
      "Construí y escalé NAIA para más de 13,000 usuarios.",
    "experience.role3.point2":
      "Integré LLMs de OpenAI, estado con Redis, servicios de Azure y Microsoft Graph para ofrecer capacidades seguras en 3-5 segundos.",
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
    "notes.title": "Notas de ingeniería",
    "notes.lead": "Ideas cortas para expandir en artículos: aprendizajes prácticos construyendo sistemas de IA para usuarios reales.",
    "notes.note1.meta": "Asistentes de IA",
    "notes.note1.title": "Lecciones de escalar un asistente de IA a más de 13,000 usuarios",
    "notes.note2.meta": "Sistemas RAG",
    "notes.note2.title": "Por qué la calidad de recuperación pesa más que los trucos de prompting",
    "notes.note3.meta": "Visión por computador",
    "notes.note3.title": "Los proyectos de visión por computador fallan antes del entrenamiento",
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

// Each language lives at its own URL (/ and /es/), so the page language is fixed by <html lang>.
function getPageLanguage() {
  const pageLanguage = document.documentElement.lang.slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.includes(pageLanguage) ? pageLanguage : "en";
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

function setLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  updateTranslatableText();
  updateLanguageSwitch();
  updateSliderDotsLabels();
  updateLastUpdated();
}

function initLanguageToggle() {
  const options = document.querySelectorAll("[data-lang-option]");

  options.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLanguage = button.getAttribute("data-lang-option") || "en";
      const href = button.getAttribute("data-lang-href");
      if (selectedLanguage === currentLanguage || !href) return;
      window.location.href = href;
    });
  });

  setLanguage(getPageLanguage());
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
