<template>
  <div class="group-btn">
    <button
      class="btn btn-danger"
      @click="renderComponent = 'Lession'">Lession</button>
    <button
      class="btn btn-outline-danger ms-1"
      @click="renderComponent = 'Exercise'">Exercise</button>
  </div>

  <component :is="renderComponent"></component>
</template>

<script>
import Lession from './components/Lession/Lession.vue'
import Exercise from './components/Exercise/Exercise.vue'

export default {
  data() {
    return {
      // renderComponent: 'Lession'
      renderComponent: 'Exercise'
    }
  },
  components: {
    Lession,
    Exercise,
  }
}
</script>

<style>
  @import './assets/base.css';
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
  
  body{
    margin: 15px;
    color: white;
  }
  h1{
    color: white;
  }
  hr{
    margin-top: 15px;
  }
  .group-btn{
    display: flex;
    justify-content: center;
  }
  .group-btn .btn{
    display: block;
    font-size: 20px;
  }
</style>