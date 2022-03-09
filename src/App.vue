<template>
  <HeaderBtn v-model:renderComponent="renderComponent"/>
  <component :is="renderComponent"></component>
</template>

<script>
import HeaderBtn from './HeaderBtn.vue'
import Lession from './components/Lession/Lession.vue'
import Exercise from './components/Exercise/Exercise.vue'
import HandlingForm from './components/HandlingForm/HandlingForm.vue'
import Derective from './components/Directive/Directive.vue'
import Mixin from './components/Mixin/Mixin.vue'

export default {
  data() {
    return {
      renderComponent: 'Mixin'
    }
  },
  components: {
    HeaderBtn,
    Lession,
    Exercise,
    HandlingForm,
    Derective,
    Mixin,
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
</style>