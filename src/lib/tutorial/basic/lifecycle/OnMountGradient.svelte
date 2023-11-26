<script lang="ts">
  import { onMount } from 'svelte';
  import { paint } from './OnMountGradient';

  onMount(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    let frameId: number;

    function onFrameRequest(prevFrameRenderEndTime: number) {
      frameId = requestAnimationFrame(onFrameRequest);
      paint(context, prevFrameRenderEndTime);
    }

    frameId = requestAnimationFrame(onFrameRequest);

    console.log('on mount frame id:', frameId);

    return () => {
      cancelAnimationFrame(frameId);
      console.log('before unmount frame id:', frameId);
    };
  });
</script>

<canvas width={32} height={32} />

<style>
  canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #666;
    mask: url('../../../../assets/svelte-logo-mask.svg') 50% 50% no-repeat;
    mask-size: 60vmin;
    -webkit-mask: url('../../../../assets/svelte-logo-mask.svg') 50% 50% no-repeat;
    -webkit-mask-size: 60vmin;
  }
</style>
