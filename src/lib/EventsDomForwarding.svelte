<script>
  import EventsDomForwardingButton from './EventsDomForwardingButton.svelte';

  import sountrack from '../assets/soundtrack.mp3';

  const audio = new Audio();
  audio.src = sountrack;

  function handleClick() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
</script>

<EventsDomForwardingButton on:click={handleClick} />
