document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const loading = document.getElementById("loading");
  window.addEventListener("load", () => {
    if (loading) {
      setTimeout(() => loading.classList.add("-hidden"), 500);
    }
  });

  const navTime = document.getElementById("navTime");
  const updateClock = () => {
    if (!navTime) return;
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    navTime.textContent = `${hours}:${minutes} CET`;
  };
  updateClock();
  setInterval(updateClock, 1000 * 30);

  const anchors = document.querySelector(".o-nav_anchors");
  const toggle = document.getElementById("menuToggle");
  if (toggle && anchors) {
    toggle.addEventListener("click", () => {
      anchors.classList.toggle("is-open");
    });
  }

  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    window.lenisInstance = lenis;
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  const getNavOffset = () => (window.innerWidth < 700 ? -40 : -120);
  const smoothScrollTo = (target, options = {}) => {
    const offset = options.offset ?? getNavOffset();
    if (lenis) {
      lenis.scrollTo(target, {
        offset,
        duration: options.duration ?? 1.1,
        immediate: options.immediate ?? false,
      });
    } else if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else if (target && target.scrollIntoView) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (offset) {
        window.scrollBy({ top: offset, behavior: "smooth" });
      }
    }
  };

  const scrollTopBtn = document.getElementById("scrollTop");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => smoothScrollTo(0, { offset: 0 }));
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;
      event.preventDefault();
      smoothScrollTo(targetEl);
      anchors?.classList.remove("is-open");
    });
  });

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  if (lenis) {
    lenis.on("scroll", ScrollTrigger.update);
  }

  const revealWords = (selector) => {
    gsap.utils.toArray(selector).forEach((container) => {
      const words = container.querySelectorAll(".word");
      if (!words.length) return;
      gsap.from(words, {
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
        },
        yPercent: 120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.06,
      });
    });
  };

  revealWords(".s-hero_title");
  revealWords(".s-hero_content");
  revealWords(".s-portfolio_content_intro");
  revealWords(".s-manifesto_content");
  revealWords(".s-about_content");
  revealWords(".s-contact_content");

  const heroLogo = document.querySelector(".s-hero_logo");
  if (heroLogo) {
    gsap.from(heroLogo, {
      autoAlpha: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });
  }

  const heroRingItems = gsap.utils.toArray(".s-hero_ring-item");
  const heroRing = document.querySelector(".s-hero_ring");
  const heroRingTrack = document.querySelector(".s-hero_ring-track");
  if (heroRingItems.length) {
    gsap.from(heroRingItems, {
      autoAlpha: 0,
      scale: 0.6,
      y: 30,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
      stagger: 0.08,
    });
  }

  if (heroRingTrack) {
    gsap.to(heroRingTrack, {
      rotation: "+=360",
      duration: 36,
      ease: "none",
      repeat: -1,
    });
  }

  const heroSection = document.querySelector("#hero");
  const initHeroScrollSync = (api) => {
    if (!heroSection || !api?.setScrollProgress) return;

    ScrollTrigger.create({
      trigger: heroSection,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => api.setScrollProgress(self.progress),
    });

    if (heroRing) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(
          heroRing,
          {
            scale: 1.15,
            rotation: 18,
            yPercent: -40,
            opacity: 0.9,
            ease: "none",
          },
          0
        )
        .to(
          heroRing,
          {
            scale: 1.35,
            rotation: 35,
            opacity: 0.4,
          },
          0.6
        );
    }
  };

  if (window.heroExperience?.setScrollProgress) {
    initHeroScrollSync(window.heroExperience);
  } else {
    window.addEventListener(
      "heroWebGL:ready",
      (event) => {
        initHeroScrollSync(event.detail);
      },
      { once: true }
    );
  }

  gsap.to(".s-hero_background_end", {
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  const portfolioProgress = document.querySelector(".s-portfolio_progress_track");
  if (portfolioProgress) {
    ScrollTrigger.create({
      trigger: "#portfolio",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        portfolioProgress.style.transform = `scaleY(${self.progress})`;
      },
    });
  }

  const portfolioNavItems = gsap.utils.toArray(".s-portfolio_nav_item");
  const portfolioBackgrounds = gsap.utils.toArray(".s-portfolio_background");
  const portfolioSections = gsap.utils.toArray(".s-portfolio_content");

  const setActivePortfolio = (index) => {
    portfolioNavItems.forEach((item) => {
      item.classList.toggle("-active", item.getAttribute("data-index") === index);
    });
    portfolioBackgrounds.forEach((bg) => {
      const matches = bg.getAttribute("data-index") === index;
      bg.classList.toggle("-visible", matches);
    });
  };

  portfolioNavItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const targetIndex = item.getAttribute("data-index");
      const targetSection = document.querySelector(`.s-portfolio_content[data-index="${targetIndex}"]`);
      if (targetSection) {
        smoothScrollTo(targetSection, { offset: -140 });
      }
    });
  });

  portfolioSections.forEach((section) => {
    const index = section.getAttribute("data-index");
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActivePortfolio(index),
      onEnterBack: () => setActivePortfolio(index),
    });

    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
    });
  });

  ScrollTrigger.batch(".s-manifesto_content", {
    start: "top 80%",
    onEnter: (batch) =>
      gsap.from(batch, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      }),
  });

  ScrollTrigger.batch(".s-about_content .line", {
    start: "top 85%",
    onEnter: (batch) =>
      gsap.from(batch, {
        yPercent: 120,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
      }),
  });
});
