document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".site-nav__menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    });
  }

  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  const fadeUps = gsap.utils.toArray("[data-animate='fade-up']");
  fadeUps.forEach((el) => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%"
      }
    });
  });

  const fadeDowns = gsap.utils.toArray("[data-animate='fade-down']");
  fadeDowns.forEach((el) => {
    gsap.from(el, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%"
      }
    });
  });

  const fadeIns = gsap.utils.toArray("[data-animate='fade-in']");
  fadeIns.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      }
    });
  });

  const cards = gsap.utils.toArray("[data-animate='card']");
  cards.forEach((card, index) => {
    gsap.from(card, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 85%"
      }
    });
  });

  const tiles = gsap.utils.toArray("[data-animate='tile']");
  tiles.forEach((tile) => {
    gsap.from(tile, {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: tile,
        start: "top 88%"
      }
    });
  });

  const steps = gsap.utils.toArray("[data-animate='step']");
  steps.forEach((step) => {
    gsap.from(step, {
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: step,
        start: "top 80%"
      }
    });
  });

  gsap.to(".hero__panel-glow", {
    scale: 1.1,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.utils.toArray(".hero__stats article").forEach((article) => {
    gsap.from(article, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: article,
        start: "top 85%"
      }
    });
  });
});
