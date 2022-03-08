<template>
  <div class="d-flex">
    <div class="btn-group mx-auto">
      <button
        class="btn btn-danger"
        :class="renderComponent === 'Lession' && 'btn-active'"
        @click="renderComponent = 'Lession'"
      >
        Lession
      </button>
      <button
        class="btn btn-outline-danger mx-2"
        :class="renderComponent === 'Exercise' && 'btn-active'"
        @click="renderComponent = 'Exercise'"
      >
        Exercise
      </button>
      <button
        class="btn btn-danger"
        :class="renderComponent === 'HandlingForm' && 'btn-active'"
        @click="renderComponent = 'HandlingForm'"
      >
        Handling Form
      </button>
    </div>
  </div>

  <component :is="renderComponent"></component>
</template>

<script>
import Lession from './components/Lession/Lession.vue'
import Exercise from './components/Exercise/Exercise.vue'
import HandlingForm from './components/HandlingForm/HandlingForm.vue'

export default {
  data() {
    return {
      renderComponent: 'HandlingForm'
    }
  },
  components: {
    Lession,
    Exercise,
    HandlingForm,
  }
}
</script>

<style>
  @import './assets/base.css';
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
  
  body {
    margin: 15px;
    color: white;
  }
  h1 {
    color: white;
  }
  hr {
    margin-top: 15px;
  }
  .btn-group .btn {
    display: block;
    font-size: 20px;
  }
  .btn-active {
    background: chartreuse;
    border: 1px solid chartreuse;
    color: black;
  }
</style>