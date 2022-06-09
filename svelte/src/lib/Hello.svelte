<script lang="ts">
  let count = 0;

  const increment = () => {
    count++;
  };
</script>

<div>
  <h1>Hello, Svelte!</h1>
  <button type="button" on:click={increment}>Click me</button>
  <span>Count: {count}</span>
</div>

<style>
  * {
    border: 0;
    box-sizing: border-box;
    color: #0084ff;
    font-family: "Arial", sans-serif;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  button {
    background-color: #0084ff;
    border-radius: 5px;
    border: 0;
    color: white;
    cursor: pointer;
    padding: 6px 12px;
    width: 200px;
  }

  span {
    font-weight: bold;
  }
</style>
