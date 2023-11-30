<script>
  import { name, greeting } from './stores';

  function handleClick() {
    $name += '!';
  }
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={handleClick}> Add exclamation mark! </button>
