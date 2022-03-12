<template>
  <h3 class="text-center my-3">Vuex</h3>
  <Result/>
  <Control/>
  <Todos/>
  <VuexActionCallApi/>
</template>

<script>
import Result from './Result.vue'
import Control from './Control.vue'
import Todos from './Todos.vue'
import VuexActionCallApi from './VuexActionCallApi.vue'

export default {
  components: {
    Result,
    Control,
    Todos,
    VuexActionCallApi,
  }
}
</script>