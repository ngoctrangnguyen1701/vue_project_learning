<template>
  <h1 style="color: red">Exercise</h1>
  <div class="d-flex align-items-end">
    <textarea placeholder="What you want to say..."></textarea>
    <button class="btn btn-success ms-3">Add</button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  textarea{
    width: 300px;
    height: 100px;
    border: 1px solid red;
    border-radius: 5px;
    padding: 5px 10px;
    background: none;
    display: block;

    color: #ccc;
  }

  button{
    display: block;
  }
</style>