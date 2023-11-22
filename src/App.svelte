<script>
  import PackageInfo from './lib/PackageInfo.svelte';

  const pkg = {
    name: 'svelte',
    speed: 'blazing',
    version: 4,
    website: 'https://svelte.dev',
  };
</script>

<PackageInfo {...pkg} />
