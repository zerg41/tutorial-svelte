<script lang="ts">
  interface IQuestion {
    id: number;
    text: string;
  }

  let questions: IQuestion[] = [
    {
      id: 1,
      text: `Where did you go to school?`,
    },
    {
      id: 2,
      text: `What is your mother's name?`,
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];

  let selected: IQuestion;

  let answer = '';

  function handleSubmit() {
    alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
  }

  function handleSelectChange() {
    answer = '';
  }
</script>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
  <select bind:value={selected} on:change={handleSelectChange}>
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>

  <input bind:value={answer} />

  <button disabled={!answer} type="submit"> Submit </button>
</form>

<p>
  selected question {selected ? selected.id : '[waiting...]'}
  <!-- 
    Because we haven't set an initial value of selected, 
    the binding will set it to the default value (the first in the list) automatically. 
    Be careful though — until the binding is initialised, selected remains undefined, 
    so we can't blindly reference e.g. selected.id in the template. 
  -->
  <!-- selected question {selected.id} -->
</p>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input,
  select {
    padding: 0.5rem;
    border: 1px solid #4d4d4d;
    border-radius: 6px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
