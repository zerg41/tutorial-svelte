import { readable, writable } from 'svelte/store';

const ONE_SECOND = 1000;

export const count = writable(0);

export const time = readable(new Date(), (set) => {
  const interval = setInterval(() => {
    set(new Date());
  }, ONE_SECOND);

  return () => {
    clearInterval(interval);
  };
});
