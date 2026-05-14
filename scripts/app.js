document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuPanel = document.querySelector("[data-menu-panel]");
  const menuLinks = Array.from(document.querySelectorAll("[data-menu-link]"));
  const trackedLinks = Array.from(document.querySelectorAll("[data-section-link]"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
  const timeNode = document.querySelector("[data-time]");
  const yearNode = document.querySelector("[data-current-year]");
  const rotator = document.querySelector("[data-rotator]");
  const portfolioItems = Array.from(document.querySelectorAll("[data-portfolio-item]"));
  const portfolioImage = document.querySelector("[data-portfolio-image]");
  const portfolioTag = document.querySelector("[data-portfolio-tag]");
  const portfolioTitle = document.querySelector("[data-portfolio-title]");
  const portfolioCopy = document.querySelector("[data-portfolio-copy]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const setMenuState = (open) => {
    if (!header || !menuToggle || !menuPanel) return;

    header.dataset.menuOpen = String(open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    menuPanel.setAttribute("aria-hidden", String(!open));
    menuPanel.inert = !open;
    body.classList.toggle("menu-open", open);
  };

  const updateClock = () => {
    if (!timeNode) return;

    const formatter = new Intl.DateTimeFormat("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Madrid"
    });

    timeNode.textContent = `${formatter.format(new Date())} SEV`;
  };

  const syncHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  const linkGroups = trackedLinks.reduce((map, link) => {
    const key = link.dataset.sectionLink;
    if (!key) return map;

    const group = map.get(key) || [];
    group.push(link);
    map.set(key, group);
    return map;
  }, new Map());

  const activatePortfolioItem = (item) => {
    if (!item || !portfolioImage || !portfolioTag || !portfolioTitle || !portfolioCopy) return;

    portfolioItems.forEach((entry) => {
      entry.classList.toggle("is-active", entry === item);
    });

    portfolioImage.src = item.dataset.portfolioImage || portfolioImage.src;
    portfolioImage.alt = item.dataset.portfolioAlt || "";
    portfolioTag.textContent = item.dataset.portfolioTag || "";
    portfolioTitle.textContent = item.dataset.portfolioTitle || "";
    portfolioCopy.textContent = item.dataset.portfolioCopy || "";
  };

  updateClock();
  window.setInterval(updateClock, 30000);
  setMenuState(false);
  syncHeaderState();

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const isOpen = header?.dataset.menuOpen === "true";
      setMenuState(!isOpen);
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  window.addEventListener("scroll", syncHeaderState, { passive: true });

  if (rotator && !reduceMotion) {
    const words = Array.from(rotator.children);
    let index = 0;

    const setWord = (nextIndex) => {
      words.forEach((word, wordIndex) => {
        word.classList.toggle("is-active", wordIndex === nextIndex);
      });
    };

    setWord(index);

    window.setInterval(() => {
      index = (index + 1) % words.length;
      setWord(index);
    }, 2400);
  }

  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  if ("IntersectionObserver" in window && linkGroups.size > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleSection) return;

        linkGroups.forEach((links) => {
          links.forEach((link) => {
            link.dataset.active = "false";
          });
        });

        const activeLinks = linkGroups.get(visibleSection.target.id) || [];
        activeLinks.forEach((link) => {
          link.dataset.active = "true";
        });
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-18% 0px -45% 0px"
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  if (portfolioItems.length > 0) {
    activatePortfolioItem(portfolioItems[0]);

    portfolioItems.forEach((item) => {
      item.addEventListener("click", () => activatePortfolioItem(item));
      item.addEventListener("focus", () => activatePortfolioItem(item));
      item.addEventListener("mouseenter", () => activatePortfolioItem(item));
    });

    if ("IntersectionObserver" in window) {
      const portfolioObserver = new IntersectionObserver(
        (entries) => {
          const visibleItem = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visibleItem) {
            activatePortfolioItem(visibleItem.target);
          }
        },
        {
          threshold: [0.45, 0.7],
          rootMargin: "-18% 0px -18% 0px"
        }
      );

      portfolioItems.forEach((item) => {
        portfolioObserver.observe(item);
      });
    }
  }
});
