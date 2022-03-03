<template>
  <h1>Props(property)</h1>
  <button @click="turn">Turn</button>
  <div class="d-flex">
    <Circle :isTurn="isTurn"/>
    <!-- muốn làm việc với thuộc tính (thay đổi giá trị thuộc tính) trong Vue,
    phải bind thuộc tính đó lại (v-bind:ten_thuoc_tinh)-->
    <Form/>
  </div>
</template>

<script>
  import Circle from './Circle.vue'
  import Form from './Form.vue'

  export default ({
    data(){
      return {
        isTurn: false,
      }
    },
    methods: {
      turn(){
        this.isTurn = !this.isTurn
      }
    },
    components: {
      Circle,
      Form,
    }
  })
</script>

<style scoped>
  .d-flex{
    display: flex;
  }
</style>
