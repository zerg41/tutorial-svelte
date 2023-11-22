<script>
  let count = 0;
  let numbers = [1, 2, 3, 4];

  let obj = { foo: { bar: 'bar' } };

  $: doubled = count * 2;
  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 0;
  }

  $: nextNumber = numbers.length + 1;
  $: sum = numbers.reduce((total, current) => total + current, 0);

  function increment() {
    count++;
  }

  function addNumber() {
    numbers = [...numbers, nextNumber];
  }

  function updateFoo() {
    obj = { ...obj, foo: { bar: 'baz' } };
  }
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>

<button on:click={addNumber}>
  Add Number {nextNumber}
</button>
<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={updateFoo}>
  obj.foo.bar = {obj.foo.bar}
</button>
