/**
 * Ownership: Frontend Architecture
 * Purpose: Centralized animation registration (GSAP plugins once).
 * Note: Wrapper prepared for modular modules while legacy remains active.
 */
let gsapRegistered = false;
let activeGsap = null;

export function registerGsap({ gsap, plugins = [] } = {}) {
  if (gsapRegistered && activeGsap) return activeGsap;
  if (!gsap) return null;

  if (plugins.length > 0) {
    gsap.registerPlugin(...plugins);
  }

  gsapRegistered = true;
  activeGsap = gsap;
  return activeGsap;
}

export function getGsap() {
  return activeGsap;
}
