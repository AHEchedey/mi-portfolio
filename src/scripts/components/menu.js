/**
 * Ownership: Components Team
 * Purpose: Shared menu component under modular ownership.
 * Note: Mirrors the current legacy UX without touching global scroll runtime.
 */
import { createCleanupStack } from "../core/events.js";

function getGridColumnWidth() {
  const styles = getComputedStyle(document.documentElement);
  const margin = parseFloat(styles.getPropertyValue("--grid-margin")) || 0;
  const gutter = parseFloat(styles.getPropertyValue("--grid-gutter")) || 0;
  const columns = parseInt(styles.getPropertyValue("--grid-columns"), 10) || 12;
  return (100 - margin * 2 - (columns - 1) * gutter) / columns;
}

function getMenuWidth(columns, unit = "vw") {
  const gutter = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--grid-gutter")
  ) || 0;
  return `${getGridColumnWidth() * columns + (columns - 1) * gutter}${unit}`;
}

function resolveMenuWidth() {
  if (window.matchMedia("(min-width: 1200px)").matches) return getMenuWidth(2);
  if (window.matchMedia("(min-width: 800px)").matches) return getMenuWidth(3);
  return null;
}

function createMenuModule() {
  const state = {
    el: null,
    deps: null,
    toggle: null,
    label: null,
    logo: null,
    menuWrap: null,
    menuContent: null,
    lang: null,
    intro: null,
    items: [],
    isOpen: false,
    timeline: null,
    cleanup: createCleanupStack()
  };

  function setExpanded(isOpen) {
    state.isOpen = isOpen;
    if (!state.el || !state.toggle || !state.menuWrap) return;
    state.el.dataset.menuState = isOpen ? "open" : "closed";
    state.toggle.setAttribute("aria-expanded", String(isOpen));
    state.menuWrap.setAttribute("aria-hidden", String(!isOpen));
    state.menuWrap.inert = !isOpen;
  }

  function restoreFocusBeforeHide() {
    const activeElement = document.activeElement;
    if (activeElement && state.menuWrap?.contains(activeElement)) {
      state.toggle?.focus();
    }
  }

  function killTimeline() {
    if (state.timeline?.kill) {
      state.timeline.kill();
    }
    state.timeline = null;
  }

  function animateLabelWidth(targetClass, gsap) {
    const widthTarget = state.label?.querySelector(targetClass);
    if (!state.label || !widthTarget) return;

    if (!gsap?.to) {
      state.label.style.width = `${widthTarget.offsetWidth}px`;
      return;
    }

    gsap.to(state.label, {
      width: widthTarget.offsetWidth,
      duration: 0.4,
      ease: "power4.out",
      overwrite: "auto"
    });
  }

  function setMenuContentVisibility(isOpen) {
    if (state.menuContent) {
      state.menuContent.style.transform = isOpen ? "translateY(0)" : "translateY(-101%)";
    }

    if (state.intro) {
      state.intro.style.opacity = isOpen ? "1" : "0";
    }

    if (state.lang) {
      state.lang.style.opacity = isOpen ? "1" : "0";
    }

    state.items.forEach((item) => {
      item.style.opacity = isOpen ? "1" : "0";
      item.style.transform = isOpen ? "translateY(0)" : "translateY(-40px)";
    });
  }

  function openMenu() {
    const gsap = state.deps?.animation?.gsap;
    killTimeline();
    const menuWidth = resolveMenuWidth();

    setExpanded(true);
    if (state.menuContent) state.menuContent.scrollTop = 0;
    state.logo?.classList.add("-opened");
    state.label?.classList.add("-opened");
    animateLabelWidth(".opened", gsap);

    if (!gsap?.timeline || !gsap?.fromTo || !gsap?.to) {
      if (menuWidth) {
        state.el.style.width = menuWidth;
      }
      state.menuWrap?.classList.add("-visible");
      setMenuContentVisibility(true);
      state.deps?.events?.emit("menu:open", { el: state.el });
      return;
    }

    state.timeline = gsap.timeline({
      onStart: () => {
        state.menuWrap?.classList.add("-visible");
      }
    });

    if (menuWidth) {
      state.timeline.to(state.el, {
        width: menuWidth,
        duration: 0.4,
        ease: "power4.out"
      });
    }

    state.timeline
      .fromTo(
        state.menuContent,
        { y: "-101%" },
        { y: 0, duration: 0.8, ease: "power4.out" }
      )
      .fromTo(
        state.intro,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "none" },
        "-=0.25"
      )
      .fromTo(
        state.lang,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "none" },
        "-=0.25"
      )
      .fromTo(
        state.items,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power4.out", stagger: 0.075 },
        "-=0.4"
      );

    state.deps?.events?.emit("menu:open", { el: state.el });
  }

  function closeMenu() {
    const gsap = state.deps?.animation?.gsap;
    killTimeline();
    restoreFocusBeforeHide();
    setExpanded(false);

    if (!gsap?.timeline || !gsap?.fromTo || !gsap?.to) {
      setMenuContentVisibility(false);
      state.menuWrap?.classList.remove("-visible");
      state.logo?.classList.remove("-opened");
      state.label?.classList.remove("-opened");
      state.el?.style.removeProperty("width");
      state.deps?.events?.emit("menu:close", { el: state.el });
      return;
    }

    state.timeline = gsap.timeline({
      onComplete: () => {
        state.menuWrap?.classList.remove("-visible");
        state.el?.style.removeProperty("width");
      }
    });

    state.timeline
      .fromTo(
        state.items,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -40, duration: 0.4, ease: "power4.out" },
        0
      )
      .fromTo(
        state.intro,
        { opacity: 1 },
        { opacity: 0, duration: 0.2, ease: "none" },
        0
      )
      .fromTo(
        state.lang,
        { opacity: 1 },
        { opacity: 0, duration: 0.2, ease: "none" },
        0
      )
      .fromTo(
        state.menuContent,
        { y: 0 },
        {
          y: "-101%",
          duration: 0.5,
          ease: "power4.out",
          onStart: () => {
            state.logo?.classList.remove("-opened");
            state.label?.classList.remove("-opened");
            animateLabelWidth(".default", gsap);
          }
        },
        0
      );

    const menuWidth = resolveMenuWidth();
    if (menuWidth) {
      state.timeline.to(
        state.el,
        { width: "auto", duration: 0.3, ease: "power4.out" },
        "-=0.2"
      );
    }

    state.deps?.events?.emit("menu:close", { el: state.el });
  }

  function toggleMenu() {
    if (state.timeline?.isActive?.()) return;
    if (state.isOpen) {
      closeMenu();
      return;
    }
    openMenu();
  }

  function handleScrollTo(trigger) {
    const targetRef =
      trigger.getAttribute("data-scroll-target") ||
      trigger.getAttribute("data-section-id");
    if (!targetRef) return;

    const didScroll = state.deps?.scroll?.scrollToTarget(targetRef, {
      behavior: "smooth"
    });

    if (didScroll) {
      closeMenu();
    }
  }

  return {
    init(el, deps) {
      if (!el) return;
      if (el.dataset.initialized === "true") return;
      el.dataset.initialized = "true";

      state.el = el;
      state.deps = deps;
      state.toggle = el.querySelector("[data-menu='toggle']");
      state.label = el.querySelector(".c-menu_toggle_label");
      state.logo = el.querySelector(".c-menu_toggle_logo");
      state.menuWrap = el.querySelector(".c-menu_wrap");
      state.menuContent = el.querySelector(".c-menu_content");
      state.lang = el.querySelector(".c-menu_lang");
      state.intro = el.querySelector(".c-menu_content_intro");
      state.items = [...el.querySelectorAll(".c-menu_content_item")];

      setExpanded(false);
      el.dataset.menuModule = "ready";
      setMenuContentVisibility(false);

      const onClick = (event) => {
        const scrollTrigger = event.target.closest("[data-menu='scrollTo']");
        if (scrollTrigger && el.contains(scrollTrigger)) {
          event.preventDefault();
          handleScrollTo(scrollTrigger);
          return;
        }

        const toggleTrigger = event.target.closest("[data-menu='toggle']");
        if (toggleTrigger && el.contains(toggleTrigger)) {
          event.preventDefault();
          toggleMenu();
          return;
        }
      };

      const onKeydown = (event) => {
        const isScrollTrigger = event.target.closest("[data-menu='scrollTo']");
        if (isScrollTrigger && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          handleScrollTo(isScrollTrigger);
          return;
        }

        const isToggle = event.target.closest("[data-menu='toggle']");
        if (isToggle && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          toggleMenu();
          return;
        }

        if (event.key === "Escape" && state.isOpen) {
          closeMenu();
          state.toggle?.focus();
        }
      };

      const onDocumentKeydown = (event) => {
        if (event.key === "Escape" && state.isOpen) {
          closeMenu();
          state.toggle?.focus();
        }
      };

      const onResize = () => {
        if (!state.isOpen) return;
        const menuWidth = resolveMenuWidth();
        if (menuWidth) {
          state.el.style.width = menuWidth;
        } else {
          state.el.style.removeProperty("width");
        }
      };

      el.addEventListener("click", onClick);
      el.addEventListener("keydown", onKeydown);
      document.addEventListener("keydown", onDocumentKeydown);
      window.addEventListener("resize", onResize);

      state.cleanup.add(() => el.removeEventListener("click", onClick));
      state.cleanup.add(() => el.removeEventListener("keydown", onKeydown));
      state.cleanup.add(() => document.removeEventListener("keydown", onDocumentKeydown));
      state.cleanup.add(() => window.removeEventListener("resize", onResize));
      state.cleanup.add(() => killTimeline());
    },

    destroy() {
      if (!state.el) return;

      state.cleanup.run();
      state.el.style.removeProperty("width");
      state.logo?.classList.remove("-opened");
      state.label?.classList.remove("-opened");
      state.menuWrap?.classList.remove("-visible");
      setMenuContentVisibility(false);
      setExpanded(false);

      delete state.el.dataset.initialized;
      delete state.el.dataset.menuModule;

      state.el = null;
      state.deps = null;
      state.toggle = null;
      state.label = null;
      state.logo = null;
      state.menuWrap = null;
      state.menuContent = null;
      state.lang = null;
      state.intro = null;
      state.items = [];
      state.isOpen = false;
    },

    onEnter() {},
    onLeave() {}
  };
}

export default createMenuModule();
