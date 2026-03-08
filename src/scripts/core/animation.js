/**
 * Ownership: Frontend Architecture
 * Purpose: Centralized animation registration (GSAP plugins once).
 * Note: Scaffold only. Not connected to production yet.
 */
let registered = false;

export function registerGsap() {
  if (registered) return;
  registered = true;
  // Future: register GSAP plugins in modular architecture.
}
