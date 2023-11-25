<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const CUSTOM_EVENT_NAME = 'message';

  const dispatch = createEventDispatcher<{ [CUSTOM_EVENT_NAME]: { text: string } }>();

  function sayHello() {
    dispatch(CUSTOM_EVENT_NAME, { text: 'Hello!' });
  }
</script>

<button on:click={sayHello}> Click to say hello </button>
