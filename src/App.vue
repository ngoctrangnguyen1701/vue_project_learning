<template>
  <HeaderBtn v-model:renderComponent="renderComponent"/>
  <component :is="renderComponent"></component>
</template>

<script>
import HeaderBtn from './HeaderBtn.vue'
import Lession from './components/Lession/Lession.vue'
import Exercise from './components/Exercise/Exercise.vue'
import HandlingForm from './components/HandlingForm/HandlingForm.vue'
import Directive from './components/Directive/Directive.vue'
import Mixin from './components/Mixin/Mixin.vue'
import Transition from './components/Transition/Transition.vue'
import VueResource from './components/VueResource/VueResource.vue'
import VueRouter from './components/VueRouter/VueRouter.vue'
import Vuex from './components/Vuex/Vuex.vue'

export default {
  data() {
    return {
      renderComponent: 'Vuex'
    }
  },
  components: {
    HeaderBtn,
    Lession,
    Exercise,
    HandlingForm,
    Directive,
    Mixin,
    Transition,
    VueResource,
    VueRouter,
    Vuex,
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