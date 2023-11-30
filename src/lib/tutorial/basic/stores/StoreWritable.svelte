<script lang="ts">
  import { count } from './stores';
  import Incrementer from './StoreIncrementer.svelte';
  import Decrementer from './StoreDecrementer.svelte';
  import Resetter from './StoreResetter.svelte';

  let countValue: number;

  count.subscribe((value) => {
    countValue = value;
  });
</script>

<h1>The count is {countValue}</h1>

<Incrementer />
<Decrementer />
<Resetter />
