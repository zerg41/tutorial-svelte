<script lang="ts">
  import { count } from './stores';
  import Incrementer from './StoreIncrementer.svelte';
  import Decrementer from './StoreDecrementer.svelte';
  import Resetter from './StoreResetter.svelte';
  import { onDestroy } from 'svelte';

  let countValue: number;

  const unsubscribe = count.subscribe((value) => {
    countValue = value;
  });

  onDestroy(unsubscribe);
</script>

<h1>The count is {countValue}</h1>

<Incrementer />
<Decrementer />
<Resetter />
