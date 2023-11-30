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
