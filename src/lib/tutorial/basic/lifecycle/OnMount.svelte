<script>
  import OnMountGradient from './OnMountGradient.svelte';

  let show = false;

  function handleClick() {
    show = !show;
  }
</script>

{#if show}
  <OnMountGradient />

  <button on:click={handleClick}>{show ? 'Hide' : 'Show'}</button>
{:else}
  <button on:click={handleClick}>{show ? 'Hide' : 'Show'}</button>
{/if}

<style>
  button {
    position: absolute;
    transform: translate(-50%, -50%);
  }
</style>
