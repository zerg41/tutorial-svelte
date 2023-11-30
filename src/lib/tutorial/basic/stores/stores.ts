import { derived, readable, writable } from 'svelte/store';

const ONE_SECOND = 1000;
const startDate = new Date();

export const count = writable(0);

export const time = readable(startDate, (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, ONE_SECOND);

  return () => {
    clearInterval(interval);
  };
});

export const elapsed = derived(time, ($time) => Math.round(($time.valueOf() - startDate.valueOf()) / ONE_SECOND));

function createCustomCount() {
  const { set, subscribe, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
    reset: () => set(0),
  };
}

export const customCount = createCustomCount();

export const name = writable('world');

export const greeting = derived(name, ($name) => `Hello ${$name}!`);
