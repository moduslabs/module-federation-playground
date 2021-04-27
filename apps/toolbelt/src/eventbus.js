export class EventBus {
  constructor() {
    this.bus = document.createElement("eventbus");
  }

  on(event, callback) {
    this.bus.addEventListener(event, callback);
  }

  off(event, callback) {
    this.bus.removeEventListener(event, callback);
  }

  trigger(event, detail = {}) {
    this.bus.dispatchEvent(new CustomEvent(event, { detail }));
  }
}

/**
 * This instance should be globally available and reusable in feature apps
 */
export const GlobalEventBus = new EventBus();
