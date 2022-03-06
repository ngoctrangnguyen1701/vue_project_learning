<template>
  <h1 style="text-align: center; margin-top: 50px 0">Style for component</h1>
  <div class="d-flex">
    <Square1/>
    <Square2/>
    <Square3/>
  </div>
</template>

<script>
  import Square1 from './Square1.vue'
  import Square2 from './Square2.vue'
  import Square3 from './Square3.vue'

  export default({
    components: {
      Square1,
      Square2,
      Square3,
    }
  })
</script>


<style scoped>
  div.d-flex{
    display: flex;
    justify-content: center;
  }
  div.square{
    width: 150px;
    height: 150px;
    border: 1px solid black;
    /* background: white; */
    margin-right: 15px;

    line-height: 150px;
    text-align: center;
    font-size: 20px;
  }
</style>