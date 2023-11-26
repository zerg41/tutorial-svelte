<script>
  let value = `Some words are <i>italic</i>, some are <b>bold<b> 
  <ul style="list-style: square">
    <li>lists</li>
    <li>are</li>
    <li>cool</li>
  </ul>
  `;
</script>

<div class="grid">
  input
  <textarea rows="5" bind:value></textarea>

  output
  <div>{@html value}</div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 5em 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    height: 100%;
  }

  textarea {
    flex: 1;
    min-width: 400px;
    resize: none;
  }
</style>
