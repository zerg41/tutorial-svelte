<script>
  import PropsPackageInfo from '../../PropsPackageInfo.svelte';

  const pkg = {
    name: 'Svelte',
    speed: 'fast',
    version: 4,
    website: 'https://svelte.dev',
  };
</script>

<PropsPackageInfo {...pkg} />
