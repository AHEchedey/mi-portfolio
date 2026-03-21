/**
 * Ownership: Frontend Architecture
 * Purpose: Shared event bus for modular communication.
 * Note: Coexists with legacy runtime.
 */
export function createEventBus() {
  const listeners = new Map();

  function on(eventName, handler) {
    if (!listeners.has(eventName)) listeners.set(eventName, new Set());
    listeners.get(eventName).add(handler);
    return () => off(eventName, handler);
  }

  function off(eventName, handler) {
    const set = listeners.get(eventName);
    if (!set) return;
    set.delete(handler);
    if (set.size === 0) listeners.delete(eventName);
  }

  function emit(eventName, payload) {
    const set = listeners.get(eventName);
    if (!set) return;
    set.forEach((handler) => handler(payload));
  }

  function clear() {
    listeners.clear();
  }

  return { on, off, emit, clear };
}

export function createCleanupStack() {
  const stack = [];

  function add(cleanupFn) {
    if (typeof cleanupFn !== "function") return () => {};
    stack.push(cleanupFn);
    return () => remove(cleanupFn);
  }

  function remove(cleanupFn) {
    const idx = stack.lastIndexOf(cleanupFn);
    if (idx >= 0) stack.splice(idx, 1);
  }

  function run() {
    while (stack.length > 0) {
      const fn = stack.pop();
      try {
        fn();
      } catch (_) {
        // no-op: cleanup must never break teardown chain
      }
    }
  }

  return { add, remove, run };
}
