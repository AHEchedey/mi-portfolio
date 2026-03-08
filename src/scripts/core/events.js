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
