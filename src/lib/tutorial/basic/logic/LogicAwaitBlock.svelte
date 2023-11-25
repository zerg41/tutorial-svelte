<script>
  async function getRandomNumber() {
    return await new Promise((resolve, reject) => {
      const chance = Math.random();

      setTimeout(() => {
        if (chance > 0.5) {
          resolve(Math.round(chance * 100));
        } else {
          reject(new Error('Not today Cowboy...'));
        }
      }, 3000);
    });
  }

  let promise = getRandomNumber();

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

<button on:click={handleClick}> generate random number </button>

{#await promise}
  <p>...waiting</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
