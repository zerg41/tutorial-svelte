<script>
  import EventsForwardingOuter from './EventsForwardingOuter.svelte';
</script>

<EventsForwardingOuter
  on:message={(event) => {
    alert(event.detail.text);
  }}
/>
