// Registrar ScrollTrigger
document.addEventListener("DOMContentLoaded", () => {
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Año en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Animación hero words (future / portfolio / collaboration)
  const heroWords = document.querySelectorAll(".hero__word");

  if (heroWords.length > 1 && window.gsap) {
    gsap.set(heroWords, { yPercent: 100, opacity: 0 });
    gsap.set(heroWords[0], { yPercent: 0, opacity: 1 });

    const tlWords = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });

    heroWords.forEach((word, index) => {
      const nextIndex = (index + 1) % heroWords.length;
      tlWords
        .to(word, {
          yPercent: -100,
          opacity: 0,
          duration: 0.7,
          ease: "power3.inOut"
        })
        .to(
          heroWords[nextIndex],
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.inOut"
          },
          "<"
        );
    });
  }

  // Fades generales
  if (window.gsap) {
    const fadeUps = document.querySelectorAll("[data-animate='fade-up']");
    fadeUps.forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

    const fadeIns = document.querySelectorAll("[data-animate='fade-in']");
    fadeIns.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Cartas (sectors)
    const cards = document.querySelectorAll("[data-animate='card']");
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: index * 0.05,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Steps con ligera escala
    const steps = document.querySelectorAll("[data-animate='step']");
    steps.forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }

  // Menú móvil simple
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("main-nav--open");
      document.body.classList.toggle("no-scroll");
    });
  }
});
