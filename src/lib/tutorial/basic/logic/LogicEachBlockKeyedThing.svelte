<script lang="ts">
  const emojis = {
    apple: '🍎',
    banana: '🍌',
    carrot: '🥕',
    doughnut: '🍩',
    egg: '🥚',
  };

  // the name is updated whenever the prop value changes...
  export let name: string;

  // ...but the "emoji" variable is fixed upon initialisation
  // of the component because it uses `const` instead of `$:`
  const emoji = emojis[name as keyof typeof emojis];
</script>

<p>{emoji} = {name}</p>
