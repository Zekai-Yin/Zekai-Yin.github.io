document.documentElement.classList.add("js");

const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.classList.toggle("is-open", !isOpen);
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.classList.remove("is-open");
      navLinks.classList.remove("is-open");
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

revealItems.forEach((item, index) => {
  item.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
});

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const projectSwitcher = document.querySelector("[data-project-switcher]");

if (projectSwitcher) {
  const tabs = Array.from(projectSwitcher.querySelectorAll("[data-project-tab]"));
  const slides = Array.from(projectSwitcher.querySelectorAll("[data-project-slide]"));
  const mediaItems = Array.from(projectSwitcher.querySelectorAll("[data-hover-media]"));
  let activeProject = 0;
  let projectTimer;

  const stopMedia = (media) => {
    media.classList.remove("is-playing");

    const video = media.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    const embed = media.querySelector("iframe");
    if (embed) {
      embed.removeAttribute("src");
    }
  };

  const startMedia = (media) => {
    media.classList.add("is-playing");

    const video = media.querySelector("video");
    if (video) {
      video.play().catch(() => {
        media.classList.remove("is-playing");
      });
    }

    const embed = media.querySelector("iframe");
    if (embed && !embed.getAttribute("src")) {
      embed.setAttribute("src", embed.dataset.videoSrc);
    }
  };

  const setProject = (index) => {
    mediaItems.forEach(stopMedia);
    activeProject = (index + slides.length) % slides.length;

    tabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === activeProject;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeProject;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
  };

  const startProjectTimer = () => {
    window.clearInterval(projectTimer);
    if (reduceMotion || slides.length < 2) return;
    projectTimer = window.setInterval(() => {
      setProject(activeProject + 1);
    }, 5200);
  };

  const resetProjectTimer = () => {
    window.clearInterval(projectTimer);
    startProjectTimer();
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setProject(Number(tab.dataset.projectTab));
      resetProjectTimer();
    });
  });

  mediaItems.forEach((media) => {
    media.addEventListener("mouseenter", () => startMedia(media));
    media.addEventListener("mouseleave", () => stopMedia(media));
    media.addEventListener("focusin", () => startMedia(media));
    media.addEventListener("focusout", () => stopMedia(media));
  });

  projectSwitcher.addEventListener("mouseenter", () => window.clearInterval(projectTimer));
  projectSwitcher.addEventListener("mouseleave", startProjectTimer);
  projectSwitcher.addEventListener("focusin", () => window.clearInterval(projectTimer));
  projectSwitcher.addEventListener("focusout", startProjectTimer);

  setProject(0);
  startProjectTimer();
}

const sections = Array.from(document.querySelectorAll("main section[id]"));
const sectionLinks = Array.from(document.querySelectorAll(".nav-links a"));

if ("IntersectionObserver" in window && sections.length) {
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.getAttribute("id");
        sectionLinks.forEach((link) => {
          const linkId = link.getAttribute("href")?.replace("#", "");
          link.classList.toggle("is-active", linkId === activeId);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => activeObserver.observe(section));
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("has-shadow", window.scrollY > 8);
}, { passive: true });
