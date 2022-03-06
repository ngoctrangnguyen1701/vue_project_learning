<template>
  <h1>Props(property, Event)</h1>
  <button @click="turn">Turn</button>
  <div class="d-flex">
    <Circle :isTurn="isTurn" :speed="speed"/>
    <!-- muốn làm việc với thuộc tính (thay đổi giá trị thuộc tính) trong Vue,
    phải bind thuộc tính đó lại (v-bind:ten_thuoc_tinh)-->
    <Form @changeSpeed="speed = $event"/>
    <!-- lấy tham số sự kiện 'changeSpeed' gán cho speed-->
  </div>
</template>

<script>
  import Circle from './Circle.vue'
  import Form from './Form.vue'

  export default ({
    data(){
      return {
        isTurn: false,
        speed: '3s',
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
    },
  })
</script>

<style scoped>
  .d-flex{
    display: flex;
    flex-wrap: wrap;
  }
</style>
