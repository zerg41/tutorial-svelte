<script lang="ts">
  import { tick } from 'svelte';

  let text = `Select some text and hit the tab key to toggle uppercase`;

  async function handleKeydown(event: KeyboardEvent & { currentTarget: HTMLTextAreaElement }) {
    if (event.key !== 'Tab') return;

    event.preventDefault();

    const element = event.currentTarget;

    if (element) {
      const { selectionStart, selectionEnd, value } = element;

      const selection = value.slice(selectionStart, selectionEnd);

      const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

      text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

      await tick();
      element.selectionStart = selectionStart;
      element.selectionEnd = selectionEnd;
    }
  }
</script>

<textarea value={text} on:keydown={handleKeydown} />

<style>
  textarea {
    width: 500px;
    height: 100%;
    resize: none;
  }
</style>
