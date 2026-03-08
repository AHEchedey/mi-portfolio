/**
 * Ownership: Frontend Architecture
 * Purpose: Modular bootstrap entrypoint (future coexistence with legacy).
 * Note: Scaffold only. Not connected to production yet.
 */
import { createEventBus } from "./events.js";
import { createScrollAdapter } from "./scroll.js";
import { registerGsap } from "./animation.js";

export function bootstrap() {
  const root = document.documentElement;
  const archMode = document.body?.dataset.arch || "legacy";

  if (archMode !== "modular") return;

  registerGsap();

  const deps = {
    events: createEventBus(),
    scroll: createScrollAdapter()
  };

  // Future: initialize section modules by data-section.
  return deps;
}
