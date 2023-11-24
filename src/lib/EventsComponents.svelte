<script>
  import EventsComponentsInner from './EventsComponentsInner.svelte';
</script>

<EventsComponentsInner
  on:message={(event) => {
    alert(event.detail.text);
  }}
/>
