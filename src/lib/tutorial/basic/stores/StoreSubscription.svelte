<script lang="ts">
  import { count } from './stores';
  import Incrementer from './StoreIncrementer.svelte';
  import Decrementer from './StoreDecrementer.svelte';
  import Resetter from './StoreResetter.svelte';
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
