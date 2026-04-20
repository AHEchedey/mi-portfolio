# Frontend Architecture Rules

## Scope

This document defines the mandatory rules for the progressive refactor from legacy architecture to modular architecture.

## Naming Conventions

Use prefixes by layer:

- `o-` for objects/layout structures.
- `c-` for reusable components.
- `s-` for section-specific blocks.
- `u-` for utility classes.

Use `kebab-case` for:

- file names
- CSS classes
- data attributes
- JSON keys (except where external APIs require other naming)

## Module Contract

Every new modular section/component must implement:

```js
init(el, deps)
destroy()
onEnter?.()
onLeave?.()
```

Rules:

- `el` is the root node for the module.
- `deps` contains shared services (events, scroll, i18n, animation helpers).
- A module must never mutate DOM outside its own `el`.
- `destroy()` must remove listeners, observers, timelines, and ScrollTriggers created by that module.
- Add guard on initialization:

```js
if (el.dataset.initialized) return;
el.dataset.initialized = "true";
```

## Legacy + Modular Coexistence

- Keep legacy runtime active until each section is migrated.
- Use architecture flags:
  - global: `data-arch="legacy|modular"`
  - per section: `data-arch-hero="modular"`, `data-arch-about="modular"`, etc.
- Retire legacy section hooks only when the modular section reproduces the required behavior; if a legacy hook still owns core production behavior, keep it temporarily and document the dependency.
- Register GSAP plugins once in a single shared module.
- Use one shared scroll adapter for all new modules.
- Do not use global implicit dependencies in new code (no `window.gsap` usage in module internals).
- Do not add new styles in `css/main.css` unless it is a documented critical hotfix.

## PR Workflow

- Rule: `1 PR = 1 objective = 1 area`.
- Keep PR scope focused and reversible.
- If a convention/contract changes, update this file in the same PR.
- Do not mix architecture scaffolding with visual redesign in the same PR.

## QA Checklist (Required Per PR)

- Lint passes (`eslint`, `stylelint`, `html-validate`, link check).
- No critical console errors.
- Smoke test passed:
  - desktop
  - mobile
  - keyboard navigation + visible focus
  - scroll
  - menu
  - hero
  - about
- No double initialization.
- No leaked listeners/triggers after `destroy()`.
- Visual regression controlled for affected area.
- Performance not significantly degraded in the changed path.
